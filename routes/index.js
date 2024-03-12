var express = require('express');
var router = express.Router();

 
const product = require('../routes/product'); //product Route
router.use('/product', product);
module.exports = router;