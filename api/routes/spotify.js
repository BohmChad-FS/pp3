const express = require('express');
const router = express.Router();
const spotifyCtrl = require('../controllers/spotify');

router.get('/login', spotifyCtrl.login);
router.get('/valid', spotifyCtrl.spotifyJWT, spotifyCtrl.valid);
router.get('/token', spotifyCtrl.spotifyJWT, spotifyCtrl.status);
router.get('/status', spotifyCtrl.spotifyJWT, spotigyCtrl.status);
router.get('/query', spotifyCtrl.spotifyJWT, spotifyCtrl.search);

module.exports = spotify