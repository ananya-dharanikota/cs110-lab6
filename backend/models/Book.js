const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  read: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Book", bookSchema);
