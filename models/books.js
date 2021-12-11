import mongoose from 'mongoose'

// field details
let bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,

    },
    createdAt: {
        type: Number,
        default: new Date(),
    }
})
                        // collection Name 
let Book = mongoose.model("books", bookSchema);

// to use this model in our code
export default Book;