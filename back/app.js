//REQUIREMENTS
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var session = require("express-session");
var LocalStrategy = require('passport-local').Strategy;

//MODELS & SYNC
const User = require('./db/models/User');
const Order = require('./db/models/Order');
const Category = require('./db/models/Category');
const Product = require('./db/models/Product');
const db = require('./db/index');
db.sync({force :false});

//APP
var app = express();
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('../front/dist'));

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../front/index.html'));
});

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

module.exports = app;

// app.use('/busca',(req,res)=>{
    
// })
// app.use('/', (req, res)=>{
    
//     // Category.findAll({include:}).then(elem=>console.log('lkaflaskfnalsfknaslfn',elem))
// })

// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var passport = require('passport');
// var session = require("express-session");
// var LocalStrategy = require('passport-local').Strategy;
// var {User} = require('./Modelos/db')
// //fofo por ahora no se la come
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// //cambio prueba branch sFernandez


// // app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// passport.use(new LocalStrategy({
//   usernameField: 'email',
//   passwordField: 'password'
// },
//   function(username, password, done) {
//     User.findOne({where: { email: username }}).then(data => {
//       if (!data.validPassword(password)) {
//         console.log('incorrecto')
        
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       console.log('coooorrrecto')
      
//       return done(null, data);
//     })
//   }
// ));

// app.use(session({ secret: "cats" }));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.use(logger('dev'));
// app.use(cookieParser());
// app.use('/', indexRouter);