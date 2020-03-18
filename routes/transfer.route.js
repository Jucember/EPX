express = require('express');
router = express.Router();
var controller = require('../controller/transfer.controller.js');


router.get('/create', controller.create);
router.post('/create', controller.postCreate);

module.exports = router;
