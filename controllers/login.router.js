const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.render('vwLogin/login');
})

module.exports = router;