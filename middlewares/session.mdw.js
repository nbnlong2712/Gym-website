const session = require('express-session');
const MySQLStore=require('express-mysql-session')(session);
const {mysql}=require('../config/default.json');
module.exports = function (app) {
  const sessionstore= new MySQLStore(mysql);
    app.set('trust proxy', 1)
    app.use(session({
      secret: 'SECRET_KEY',
      resave: false,
      saveUninitialized: true,
      store: sessionstore,
      cookie: {
         //secure: true
      }
    }));
    
  }