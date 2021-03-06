const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var BookSchema = new Schema({
  isbn: String,
  title: String,
  image: String,
  author: String,
  description: String,
  published_year: String,
  publisher: String,
  updated_date: { type: Date, default: Date.now },
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;
