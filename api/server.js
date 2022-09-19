const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors())

const PORT = process.env.PORT || 3001;

const spotifyRouter = require('./routes/spotify')

const mongoDBURL = process.env.mongoDBURL;

mongoose.connect(mongoDBURL, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', error => console.error(error))
db.once('open', () => console.log("Database Connection Established"))

app.use(express.json())
app.use('/spotify/v0', spotifyRouter)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})