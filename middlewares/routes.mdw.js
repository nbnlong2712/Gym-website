const auth = require('./auth.mdw');
module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('home');
  });

  app.use('/account/', require('../controllers/account.route'));
  app.use('/shop/', require('../controllers/product.route'));
  app.use('/cart/', auth, require('../controllers/cart.route'));
  app.use('/course/', require('../controllers/course.route'));
  app.use('/workoutArticle', require('../controllers/workoutArticle.route')); 
  app.use('/nutrionArticle', require('../controllers/nutrionArticle.route'));
  app.get('/err', function (req, res) {
    throw new Error('Error!');
  })
  app.use(function (req, res) {
    res.render('404', {
      layout: false
    });
  });
}
