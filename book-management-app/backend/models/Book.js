const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    
    isbn: String,

    title: String,

    author: String,

});

module.exports = mongoose.model("Book", bookSchema);