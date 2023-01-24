const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


const handleBars = require('hbs');


const indexRouter = require('./routes/index');
const mozoRouter = require('./routes/mozo');
const cocinaRouter = require('./routes/cocina');

const app = express();


app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', '.hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(bodyParser({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/mozo', mozoRouter);
app.use('/cocina', cocinaRouter);


app.use(function (req, res, next) {
  next(createError(404));
});


app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});


mongoose.connect('mongodb+srv://elliot:holamundo@cluster0.mnjfy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
},
  (err, res) => {
    if (err) {
      console.error("No conectado: " + err.message);
    } else {
      console.log("conectado con mongo en : " + res.connections[0]._connectionString);
    }
  }
);

handleBars.registerHelper('selected', (opcion, valor) => {
  if (opcion == valor) {
    return 'selected';
  } else {
    return '';
  }
});


app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});




module.exports = app;

