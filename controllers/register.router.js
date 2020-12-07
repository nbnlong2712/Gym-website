const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.render('vwLogin/register');
})

module.exports = router;