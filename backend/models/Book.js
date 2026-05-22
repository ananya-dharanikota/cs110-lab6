const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  isbn: {
    type: String,
    required: [true, "ISBN is required"],
    unique: true,
    trim: true,
  },

  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },

  author: {
    type: String,
    required: [true, "Author is required"],
    trim: true,
  },

  publishedDate: {
    type: String,
    trim: true,
  },

  publisher: {
    type: String,
    trim: true,
  },

  pages: {
    type: Number,
    min: 1,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Book", BookSchema);
