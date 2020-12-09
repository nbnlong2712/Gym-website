const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const app = express();

app.use(morgan('dev'));
app.engine('handlebars', exphbs({
  // defaultLayout: 'main.hbs',
  defaultLayout: 'home.handlebars'
}));
app.set('view engine', 'handlebars');
app.get('/', function (req, res) {
  // res.send('Hello World!');
  res.render('home');
});


app.use('/login/', require('./controllers/login.router'));
app.use('/register/', require('./controllers/register.router'));
app.use('/shopequipments/', require('./controllers/shopEquipments.router'))
app.use('/shopCourses/', require('./controllers/shopCourses.router'))
app.use('/scheduler/', require('./controllers/scheduler.router'))
app.use(express.static('public'));

const PORT = 3000;
app.listen(PORT, function () {
  console.log(`E-Commerce app is listening at http://localhost:${PORT}`)
})