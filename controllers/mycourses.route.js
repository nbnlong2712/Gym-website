const express=require('express');
const { single } = require('../models/courses.model');
const mycoursesModel=require('../models/mycourses.model')
const router=express.Router();

router.get('/', async function (req, res) {
    console.log(req.session.authUser.User_ID);
    const id=req.session.authUser.User_ID;
    console.log(id);
    const list= await mycoursesModel.all(id);
    res.render('vwMyCourses/index', {
      Courses: list,
      empty: list.length === 0,
      layout:false,
    });
    
})
router.post('/add', async function(req, res){
   const  course={
      Course_ID  : +req.body.id,
      User_ID: req.session.authUser.User_ID
    }
    const c=await mycoursesModel.single(req.session.authUser.User_ID,req.body.id);
    if(c===null)
    {
    await mycoursesModel.add(course);
    }
    res.redirect(req.headers.referer);
})

module.exports=router;