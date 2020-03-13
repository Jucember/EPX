var db =require('../db');
var shortid =require('shortid');

module.exports.index = function(req, res){
  res.render('users/index',{
    // lay du lieu tu database
    users: db.get('users').value()
  });
};

module.exports.search =function(req, res){
     var q = req.query.q;
     var matchUser = db.get('users').value().filter(function(u){
       return u.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
     });

     res.render('users/index',{
       users: matchUser
     });
    console.log(req.query);
};

module.exports.get =function(req, res){
  var id = req.params.id;
        //tim user co id
  var user = db.get('users').find({id: id}).value();
  console.log(user);
  res.render('users/view',{
    user: user
  });
};

module.exports.create = function(req, res){
  res.render('users/create');
};

module.exports.postCreate =function(req, res){
  // tao id ngau
  req.body.id = shortid.generate();

  db.get('users').push(req.body).write();
  res.redirect('/users');
};
