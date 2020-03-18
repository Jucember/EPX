express = require('express');
router = express.Router();

var controller = require('../controller/authentical.controller');

router.get('/login', controller.login);
router.post('/login', controller.postLogin);
module.exports = router;
