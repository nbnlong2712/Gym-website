
module.exports = function (app) {
  app.use(function (req, res,next) {
    if (typeof (req.session.auth) === 'undefined') {
      req.session.auth = false;
    }
    res.locals.auth = req.session.auth;
    res.locals.authUser = req.session.authUser;
    next();
  });
  app.use('/account/', require('../controllers/account.route'));
}