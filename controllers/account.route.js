const express = require('express');
const bcrypt = require('bcryptjs');
const userModel = require('../models/user.model');
const auth=require('../middlewares/auth.mdw');
const router = express.Router();
router.get('/register',  function (req, res) {
  res.render('vwAccount/register')
});

router.get('/profile', auth, function (req, res, next) {
  res.render('vwAccount/profile');
  
})
router.post('/register', async function (req, res,next) {
  const hash = bcrypt.hashSync(req.body.password, 10)
  const user = {
    User_name: req.body.username,
    User_password: hash,
    User_email:req.body.email
  }

  await userModel.add(user)
  res.render('vwAccount/register')
});

router.get('/is-available', async function (req, res) {
  const username = req.query.user;
  const user = await userModel.singleByUserName(username);
  if (user === null) {
    return res.json(true);
  }

  res.json(false);
})
router.get('/login',  function (req, res) {
  res.render('vwAccount/login')
});
router.post('/login', async function(req,res,next)
{
  const user=await userModel.singleByUserName(req.body.username);
  if(user===null)
  {
    return res.render('vwAccount/login',{
    err_message: 'Invalid username'
    });
  }
   const ret= bcrypt.compareSync(req.body.password, user.User_password);
   if(ret===false)
   {
     return res.render('vwAccount/login',{
       err_message:'Invalid password'
     });
   }
  req.session.auth = true;
  req.session.authUser = user;
  next();
  const url = req.session.retUrl || '/';
  res.redirect(url);
  });

  router.post('/logout', async function (req, res) {
    req.session.auth = false;
    req.session.authUser = null;
    req.session.retUrl = null;
    req.session.cart = [];
  
    const url = req.headers.referer || '/';
    res.redirect(url);
})
module.exports = router;