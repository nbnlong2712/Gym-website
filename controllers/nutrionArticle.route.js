const express = require('express');
const nutrionArticle=require("../models/nutrionArticle.model");
const router = express.Router();

router.get('/', async function (req, res, next) {
  const list= await nutrionArticle.all();
  res.render('vwNutrion/nutrionArticle',
  {
    article: list,
    empty: list.length === 0
  });
})

router.get('/content1/:id', async function (req, res, next) {
  const artId = +req.params.id;
  const article = await nutrionArticle.single(artId);
  if (article === null) {
    return res.redirect('/');
  }

  res.render('vwNutrion/content1', {
    article
  });
})
module.exports = router;




