const express = require('express');
var shopEquipmentsmodel=require("../models/shopEquipments.model");
const router = express.Router();

router.get('/',  async function (req, res) {
    const list= await shopEquipmentsmodel.all();
    const first = list[0];
    const remain = list.slice(1, list.length)
  res.render('vwShopEquipments/buy',
  {
    list:remain,
    first
  });
})
module.exports = router;
