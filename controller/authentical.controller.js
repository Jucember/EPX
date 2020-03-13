var db =require('../db');

module.exports.login = function(req, res){
  res.render('auth/login');
};

module.exports.postLogin = function(req, res){
  var email = req.body.email;
  var password =req.body.password;
  user = db.get('users').find({email: email}).value();
  if(!user){
    res.render('auth/login',{
      errors:[
        'email does not exit'
      ],
      // giu nguyen gia tri khi nguoi dung nhap sai
      values : req.body
    });
    return;
  }
  if(user.password!=password){
    res.render('auth/login',{
      errors:[
        'password is not correct'
      ],
      values : req.body
    });
    return;
  }
  res.cookie('userId', user.id);
  res.redirect('/users');
};
