const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    text: {
        type: String,
        required: true,
        trim: true,
    },
    stars: {
        type: Number,
        required: true,
        trim: true,
    },
    img: {
        data: Buffer,
        contentType: String,
    },
});

module.exports = mongoose.model("User", userSchema);
