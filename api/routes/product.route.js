express = require('express');
router = express.Router();
var controller = require('../controllers/product.controller.js');

router.get('/', controller.product);
module.exports = router;
