const cookieSession = require('cookie-session');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport')
const cors = require('cors')
const routesHandler = require('./routes/handler.js');
require('./passport');

const app = express();
app.use(cookieSession(
    {
        name:"session",
        keys:['lama'],
        maxAge: 24*60*60*100

    }
))
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin: 'http://localhost:3000',
    methods:'GET, POST, PUT, DELETE',
    credentials: true
}));


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesHandler);

const PORT = 4000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});