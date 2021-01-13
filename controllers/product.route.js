const express = require('express');
const productModel = require('../models/product.model');

const router = express.Router();

router.get('/bySupplement', async function (req, res, next) {
  

  const list = await productModel.all();
  res.render('vwProducts/bySupplement', {
    products: list,
    empty: list.length === 0
  });
})

router.get('/detail/:id', async function (req, res, next) {
  const proId = +req.params.id;
  const product = await productModel.single(proId);
  if (product === null) {
    return res.redirect('/');
  }

  res.render('vwProducts/detail', {
    product
  });
})

module.exports = router;