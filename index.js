require('dotenv').config();
console.log(process.env.SESSION_APP);
var express = require('express');
var app = new express();
var port =3000;
// install req.body
var bodyParser = require('body-parser');
// token csurf
var csurf = require('csurf');
//mongose
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

var userRoute =require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cartRoute= require('./routes/cart.route');
var transferRoute = require('./routes/transfer.route')
var authMiddleware = require('./middlewares/auth.middlewares');
var sessionMiddleware = require('./middlewares/session.middleware.js');
// cookie bodyParser
var cookieParser = require('cookie-parser');
//pug
app.set('view engine','pug');
app.set('views','./views')
//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cookieParser(process.env.SESSION_APP));
app.use(express.static('public'));

app.use(sessionMiddleware);
// csrf phai đặt phía sau cookie
//app.use(csurf({ cookie: true }));
app.get('/', function(req, res){
  res.render('index',{
    name:'AAA'
  });
});


app.use('/users',authMiddleware.requireAuth, userRoute);
app.get('/styles/custom.css',function(req, res){
  res.send('acd')
});

app.use('/products',productRoute);
app.use('/cart', cartRoute);
app.use('/transfer',authMiddleware.requireAuth, transferRoute);
  // login route
app.use('/auth', authRoute);
app.listen(port, function(){
  console.log("server is loading at "+port);
})
