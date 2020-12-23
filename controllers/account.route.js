const express = require('express');
const bcrypt = require('bcryptjs');
const userModel = require('../models/user.model');
const router = express.Router();

router.get('/register',  function (req, res) {
  res.render('vwAccount/register')
});

router.post('/register', async function (req, res) {
  const hash = bcrypt.hashSync(req.body.password, 10)
  const user = {
    User_name: req.body.username,
    User_password: hash,
    User_email:req.body.email
  }

  await userModel.add(user)
  res.render('vwAccount/register')
});


module.exports = router;