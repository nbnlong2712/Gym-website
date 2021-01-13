const express = require('express');
const workoutArticle=require("../models/workoutArticle.model");
const router = express.Router();

router.get('/', async function (req, res, next) {
  const list= await workoutArticle.all();
  res.render('vwWorkout/workoutArticle',
  {
    articles: list,
    empty: list.length === 0
  });
})

router.get('/content/:id', async function (req, res, next) {
  const artId = +req.params.id;
  const articles = await workoutArticle.single(artId);
  if (articles === null) {
    return res.redirect('/');
  }

  res.render('vwWorkout/content', {
    articles
  });
})
module.exports = router;


