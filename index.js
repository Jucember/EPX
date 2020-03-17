require('dotenv').config();
console.log(process.env.SESSION_APP);
var express = require('express');
var app = new express();
var port =3000;
// install req.body
var bodyParser = require('body-parser');

var userRoute =require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cartRoute= require('./routes/cart.route');

var authMiddleware = require('./middlewares/auth.middlewares');
var sessionMiddleware = require('./middlewares/session.middleware.js')
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
  // login route
app.use('/auth', authRoute);
app.listen(port, function(){
  console.log("server is loading at "+port);
})
