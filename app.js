const express = require('express');
const morgan = require('morgan');
require('express-async-errors');
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({
   extended: true 
  }));
app.use(express.static('public'));
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

require('./middlewares/session.mdw')(app);
require('./middlewares/locals.mdw')(app);
require('./middlewares/routes.mdw')(app);
require('./middlewares/view.mdw')(app);

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