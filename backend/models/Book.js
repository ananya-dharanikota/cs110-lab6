const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  read: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    default: "Uncategorized",
  },
});

module.exports = mongoose.model("Book", bookSchema);
