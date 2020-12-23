const express = require('express');
var shopCoursesmodel=require("../models/shopCourses.model");
const router = express.Router();

router.get('/',  async function (req, res) {
    const list= await shopCoursesmodel.all();
  res.render('vwShopCourses/buy',
  {
    list:list
  });
})
module.exports = router;
