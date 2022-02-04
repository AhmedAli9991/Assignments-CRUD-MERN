var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');
var connection=mongoose.connect('mongodb://localhost:27017/lms');
connection.then((db)=>{
  console.log("DB connected")
},(err)=>{
  console.log("error")
});

var teacherRouter = require('./routes/teacher');//TEACHER ROUTER IN ROUTES FOLDER

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/teacher', teacherRouter);//MOUNT POINT FOR TEACHER 

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});
app.listen(4000,()=>console.log("Listening on port 4000"))

module.exports = app;
