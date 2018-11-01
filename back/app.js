//REQUIREMENTS
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require("express-session");
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bodyParser = require('body-parser');

//MODELS & SYNC
const User = require('./db/models/User');
const Order = require('./db/models/Order');
const Category = require('./db/models/Category');
const Product = require('./db/models/Product');
const Review = require('./db/models/Review');
const db = require('./db/index');
db.sync({force : false});

//APP
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(session({ secret: "cats" }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
//app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('../front/dist'));

//ROUTERS
const userRouter = require('./routes/userRouter');
const ProductRouter = require('./routes/productRouter')
const categoryRouter = require('./routes/categoryRouter')

//ROUTES
app.use('/api/user', userRouter);
app.use('/api/product', ProductRouter);
app.use('/api/categories', categoryRouter)

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../front/index.html'));
});

//PASSPORT
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
function(username, password, done) {
    User.findOne({where: { email: username }})
    .then(user => {console.log(user.passwordHash(password, user.salt))
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (user.passwordHash(password, user.salt) != user.password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    })
  }
));
passport.serializeUser(function(user, done) {
  console.log('serialize')
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  console.log('deserialize')
  done(null, user);
});

module.exports = app;

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