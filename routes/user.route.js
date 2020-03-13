var express = require('express');
var router = express.Router();

var controller = require('../controller/user.controller');
var validate =require('../validate/user.validate');
var authMiddleware = require('../middlewares/auth.middlewares.js');
// cookie
router.get('/cookie', function(req, res, next){
  res.cookie('user-id', 12346);
  res.send('hello');
});

router.get('/',authMiddleware.requireAuth, controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

// router view user
router.get('/:id', controller.get);

router.post('/create', validate.postCreate, controller.postCreate);

module.exports = router;
