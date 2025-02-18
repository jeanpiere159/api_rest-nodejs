const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        title:String,
        author: String,
        publication_date: String,
        genre: String
        
    }
)

module.exports = mongoose.model('Book', bookSchema);