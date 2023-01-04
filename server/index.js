
import express, { json, urlencoded } from 'express'
import cors from 'cors'
import path from 'path';
import { fileURLToPath } from 'url';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2'
import { Client } from './client.js'
import {config} from 'dotenv'
config()

// import db from '../db'

passport.use(
 new GoogleStrategy(
  {
   clientID: process.env['GOOGLE_CLIENT_ID'],
   clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
   callbackURL: 'http://localhost:3000/auth/redireact', 
   passReqToCallback:true
  },
  function (accessToken, refreshToken, profile, cb) {
   console.log(profile)
   // return cb(undefined,{id:'try'})
   const doc = {
    _id: profile.id,
    _type: 'user',
    userName: profile.name,
    image: profile.picture,
   }
   Client.createIfNotExists(doc)
    .then(function (user) {
     return cb(undefined, user)
    })
    .catch(err => {
     return cb(err, undefined)
    })
  }
 )
)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', cors(), function (req, res) {
 res.sendFile(path.join(__dirname, 'build', 'index.html'))
 res.end()
})

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}));


app.post('/admin', (req, res) => {})
app.get('/login/google', (req, res) => {
 
})
app.post('/user/comment', (req, res) => {})
app.post('/comment', (req, res) => {})
app.get('/featured', () => {})
app.get('/caterory', () => {})

app.listen(3000, () => {
 console.log('now listen' + Date.now())
})
