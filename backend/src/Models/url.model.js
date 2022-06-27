const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    longUrl: String,
    shortUrl: String,
    urlCode: String,
    date: {
        type: Date,
        default: Date.now
    }
})

const shortUrl = mongoose.model("shortURL", schema);

module.exports = shortUrl;