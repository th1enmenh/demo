var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var studentRouter = require('./routes/student');
var lectureRouter = require('./routes/lecture');

var mongoose = require('mongoose')
var url = "mongodb://localhost:27017/cloud"
mongoose.connect(url, { useNewUrlParser: true}, (err) => {
  if (!err) {
    console.log('DB connect succed! ')
  } else {
    console.log(err)
  }
})

var hbs = require('hbs');
hbs.registerHelper('dateFormat', require('handlebars-dateformat'));

var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/student', studentRouter);
app.use('/lecture', lectureRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('http://localhost:3000')
})

module.exports = app;
