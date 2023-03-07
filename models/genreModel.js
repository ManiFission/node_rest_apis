const mongoose = require('mongoose');
const Joi = require('joi');

const genreSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
});

const Genre = new mongoose.model('Genre', genreSchema);

function validateGenre(genre) {
  console.log('genre in validate func : ', genre);
  const schema = Joi.object({ name: Joi.string().min(3).required() });
  return schema.validate(genre);
}

exports.Genre = Genre;
exports.validate = validateGenre;
