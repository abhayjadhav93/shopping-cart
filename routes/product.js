var express = require('express');
var router = express.Router();

const {getAllproducts}=require('../controlllers/product/product')

router.get('/',getAllproducts);



module.exports = router;