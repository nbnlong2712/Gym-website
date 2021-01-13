const express = require('express');
const CoursesModel = require('../models/courses.model');

const router = express.Router();

router.get('/buycourse', async function (req, res, next) {
  const list = await CoursesModel.all();
  res.render('vwCourses/buy', {
    Courses: list,
    empty: list.length === 0,
    layout:false,
  });
})

router.get('/detail/:id', async function (req, res, next) {
  const couId = +req.params.id;
  const Courses= await CoursesModel.single(couId);
  if (Courses === null) {
    return res.redirect('/');
  }

  res.render('vwCourses/detail', {
    Courses
  });
})

module.exports = router;