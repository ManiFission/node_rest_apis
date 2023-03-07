const mongoose = require('mongoose');
const Joi = require('joi');

const customerSchema = mongoose.Schema({
  isGold: { type: Boolean, default: false },
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  phone: {
    type: Number,
    required: true,
    minlength: 3,
    maxlength: 10,
  },
});

const Customer = new mongoose.model('Customer', customerSchema);

function validateCustomer(customer) {
  console.log('customer in validate func : ', customer);
  const schema = Joi.object({
    isGold: Joi.boolean(),
    name: Joi.string().min(3).max(50).required(),
    phone: Joi.number().required(),
  });
  return schema.validate(customer);
}

exports.Customer = Customer;
exports.validate = validateCustomer;
