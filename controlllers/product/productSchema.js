const Joi = require('joi');

const productSchema = Joi.object({
 
    product_name: Joi.string().required(),
    product_price: Joi.number().required()
});



module.exports = {
    productSchema,
};