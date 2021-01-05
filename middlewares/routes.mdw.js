
module.exports = function (app) {
  app.get('/', function (req, res) {
    //console.log(req.session.auth);
    //console.log(req.session.authUser);
    res.render('home');
  });

  app.use('/account/', require('../controllers/account.route'));
  app.get('/err', function (req, res) {
    throw new Error('Error!');
  })
  app.use(function (req, res) {
    res.render('404', {
      layout: false
    });
  });
}
