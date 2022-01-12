require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const ejs = require('ejs');
const mainRoute = require('./routes/mainRoute')

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

//initialize session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());


app.use(mainRoute)
require('.models/db') //connects to da db





const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});