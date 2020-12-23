const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
require('express-async-errors');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', exphbs({
  defaultLayout: 'home.handlebars'
}));
app.set('view engine', 'handlebars');
app.get('/', function (req, res) {
  res.render('home');
});
app.use(express.static('public'));

app.use('/login/', require('./controllers/login.router'));
app.use('/shopequipments/', require('./controllers/shopEquipments.router'))
app.use('/shopCourses/', require('./controllers/shopCourses.router'))
app.use('/scheduler/', require('./controllers/scheduler.router'));
app.use('/menu/', require('./controllers/menu.router'));
app.use('/nutrionArticle/', require('./controllers/nutrionArticle.router'));
app.use('/muscle/', require('./controllers/muscle.router'));
app.use('/abs/', require('./controllers/abs.router'));
app.use('/chest/', require('./controllers/chest.router'));
app.use('/arms/', require('./controllers/arms.router'));
app.use('/legs/', require('./controllers/legs.router'));
app.use('/head/', require('./controllers/head.router'));
app.use('/cardio/', require('./controllers/cardio.router'));
app.use('/workoutArticle/', require('./controllers/workoutArticle.router'));
app.use('/adv/', require('./controllers/adv.router'));
app.use('/postAdv/', require('./controllers/postAdv.router'));
app.use('/postArticle/', require('./controllers/postArticle.router'));
require('./middlewares/view.mdw')(app);
require('./middlewares/routes.mdw')(app);
app.get('/err', function(req,res) {
  throw new  Error('Error!');
  
})
app.use(function( err ,req, res,next)
{
  console.error(err.stack);
  res.render('404' ,{
    layout:false
  })
});
const PORT = 3000;
app.listen(PORT, function () {
  console.log(`E-Commerce app is listening at http://localhost:${PORT}`)
})