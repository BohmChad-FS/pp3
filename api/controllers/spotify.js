const { clientID, clientSecret } = process.env
const SpotifyToken = require('../models/spotifytoken')
const qs = require('qs')
const randomstring = require('randomstring')
const querystring = require('querystring')

const baseAuth = 'Basic ' + (new Buffer.from(clientID + ':' + clientSecret).toString('base64'))
const redirect_uri = 'http://localhost:3001/spotify/v0/auth'
const current = new Date().getTime()

const getToken = (code, grant_type, jwt) => {
    let form = (grant_type === "refresh token")
        ? qs.stringify({ refresh_token: code, grant_type })
        : qs.stringify({ code, grant_type, redirect_uri})
    let authToken = {
            url: 'https://accounts.spotify.com/api/token',
            form,
            headers: {
                'Authorization': baseAuth,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        json: true
    }
    return authToken
        .then(({ form }) => {
            form.expires_in = newDate().getTime() + form.expires_in
            jwt.update( form )
            return token.save()
        })
        .catch((error) => {return false })
}

exports.spotifyJWT = async (req, res, next) => {
    req.token = await SpotifyToken.findOne({ where: {} })
    if(!req.token && !req.query.code) { return next() }
    if(!req.token && req.query.code) {
        const newSpotifyToken = new SpotifyToken({
            access_token: form.access_token,
            token_type: form.token_type,
            expires_in: form.expires_in,
            refresh_token: form.refresh_token
        })
        req.token = await getToken(req.query.code, 'authorization_code', newSpotifyToken.save())
    } else if(current > req.token.expires_in) {
        req.token = await getToken(req.jwt.refresh_token, 'refresh_token', req.jwt)
    }
    if(!req.token) {
        res.json({ error: 'Could not request JWT'})
    }
    return next()
}

exports.valid = async (req, res) => {
    if(req.jwt) {
        res.redirect('http://localhost:3000')
    } else {
        res.redirect('http://localhost:3000/login')
    }
}

exports.status = async (req, res) => {
    const authorized = (req.jwt && req.jwt.expires_in > current)
        ? true
        : false
    res.json({ authorized })
}

exports.login = async (req, res) => {
    const code = randomstring.generate(16);
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring({
            response_type: 'code',
            client_id: clientID,
            redirect_uri,
            code
        }));
}

exports.search = async (req, res) => {
    await fetch('https://api.spotify.com/v1/search',
    {
        params: {
            type: 'artist, track',
            q: req.query.q,
            limit: 5
        },
        headers: {
            'Authorization': `Bearer ${req.token.access_token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(({data}) => {
        res.json(data)
    })
    .catch((error) => {
        res.json(error)
    })
}