const mongoose = require("mongoose");

const spotifyTokenSchema = new mongoose.Schema({
    access_token: {
        type: String,
    },
    token_type: {
        type: String
    },
    expires_in: {
        type: Number
    },
    refresh_token: {
        type: String
    }
})

module.exports = mongoose.model('Token', spotifyTokenSchema)