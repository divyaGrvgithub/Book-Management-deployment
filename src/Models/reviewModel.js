const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.objectId

const reviewSchema = new mongoose.Schema({
    bookId: {
        type: objectId,
        required: true,
        ref: 'Book'
    },
    reviewedBy: {
        type: String,
        required: true,
        default: "Guest"
    },
    reviewedAt: {
        type: Date,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    reviews: {
        type: String
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true })

module.exports = mongoose.model("Review", reviewSchema)