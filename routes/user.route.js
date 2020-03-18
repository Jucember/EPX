var express = require('express');
var router = express.Router();
var multer = require('multer');


var controller = require('../controller/user.controller');
var validate =require('../validate/user.validate');
var authMiddleware = require('../middlewares/auth.middlewares.js');

//tao duong dan de uploadfile
var upload =multer({dest:'./public/uploads/'})

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

router.post('/create',
        // kiem tra rieng le tu noi co id 'avatar'
upload.single('avatar'), 
 validate.postCreate,
  controller.postCreate);

module.exports = router;
