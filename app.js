var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


/*
let users = [
  {
    id: 1,
    name: 'alice'
  },
  {
    id: 2,
    name: 'bek'
  },
  {
    id: 3,
    name: 'chris'
  }
]

*/

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// port setup
app.set('port', process.env.PORT || 9000);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

/*

app.get('/users', (req, res) => {
   console.log('who get in here/users');
   res.json(users)
 });
 
 app.post('/post', (req, res) => {
   console.log('who get in here post /users');
   var inputData;
 
   req.on('data', (data) => {
     inputData = JSON.parse(data);
   });
 
   req.on('end', () => {
     console.log("user_id : "+inputData.user_id + " , name : "+inputData.name);
   });
 
   res.write("OK!");
   res.end();

*/

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//////////////////////////////////////////////////////
// ------- creates Server -------
module.exports = app;

var server = app.listen(app.get('port'), function() {
console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;

/*

var express = require('express');
var app = express();
app.get('/',function(req,res){
res.send("hello this is my node app");
})

app.listen(3000,function(){
console.log("app listening on port 3000");
})

*/

