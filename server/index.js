const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const app = express();
const keys = require('./config/keys')

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken) => {
    console.log(accessToken);
})
);

app.get('auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))


// Redirect = 'http://localhost:5000/auth/google/callback' 
const PORT = process.env.PORT || 5000;
app.listen(PORT)

