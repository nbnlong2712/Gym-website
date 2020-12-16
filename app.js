const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const app = express();

app.use(morgan('dev'));
app.engine('handlebars', exphbs({
  defaultLayout: 'home.handlebars'
}));
app.set('view engine', 'handlebars');
app.get('/', function (req, res) {
  res.render('home');
});


app.use('/login/', require('./controllers/login.router'));
app.use('/register/', require('./controllers/register.router'));
app.use('/shopequipments/', require('./controllers/shopEquipments.router'))
app.use('/shopCourses/', require('./controllers/shopCourses.router'))
app.use('/scheduler/', require('./controllers/scheduler.router'));
app.use('/menu/', require('./controllers/menu.router'));
app.use('/nutrionArticle/', require('./controllers/nutrionArticle.router'));
app.use('/muscle/', require('./controllers/muscle.router'));
app.use('/cardio/', require('./controllers/cardio.router'));
app.use('/workoutArticle/', require('./controllers/workoutArticle.router'));
app.use('/adv/', require('./controllers/adv.router'));
app.use('/postAdv/', require('./controllers/postAdv.router'));
app.use('/postArticle/', require('./controllers/postArticle.router'));

app.use(express.static('public'));

const PORT = 3000;
app.listen(PORT, function () {
  console.log(`E-Commerce app is listening at http://localhost:${PORT}`)
})