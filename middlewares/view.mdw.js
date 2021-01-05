const exphbs = require('express-handlebars');
var ehb_sections = require('express-handlebars-sections');
module.exports = function (app) {
  app.engine('handlebars', exphbs({
    defaultLayout: 'home.handlebars',
    helpers: {
      section:ehb_sections()
    }
   
  }));
  app.set('view engine', 'handlebars');
}
