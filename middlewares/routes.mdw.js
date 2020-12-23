const express = require('express');
module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('home');
  });
  app.use('/account', require('../controllers/account.route'));
}
