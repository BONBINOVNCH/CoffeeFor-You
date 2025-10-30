const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    opinion: {
        type: String,
        required: true,
        trim: true,
    },
    rating: {
        type: Number,
        required: true,
        trim: true,
    },
    image: {
        type: Buffer,
        required: false,
    },
});

module.exports = mongoose.model("User", userSchema);
