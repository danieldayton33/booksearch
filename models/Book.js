const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String,
        default: "https://via.placeholder.com/200"
    },
    link: {
        type: String,
        required: true
    },
    saved: {
        type: Boolean,
        default: false
    }
})

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;