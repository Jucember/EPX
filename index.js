var express = require('express');
var app = new express();
var port =3000;
// install req.body
var bodyParser = require('body-parser');
var userRoute =require('./routes/user.route')
//pug
app.set('view engine','pug');
app.set('views','./views')
//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index',{
    name:'AAA'
  });
});

app.use('/users', userRoute);
app.get('/styles/custom.css',function(req, res){
  res.send('acd')
});

app.listen(port, function(){
  console.log("server is loading at "+port);
})
