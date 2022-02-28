const CasStrategy = require('passport-cas2').Strategy;
const passport = require('passport');

UNREGISTERED = 'UNREGISTERED';

const cas = new CasStrategy({
    version: 'CAS2.0',
    casURL: 'https://secure.its.yale.edu/cas',
}, 
// This is the `verify` callback
function(req, profile, done) {
    //Check to make sure it user exists in database here
    
    //prints out netId
    //console.log(req);
    // if(req === 'akm66') {
    //     done(null, UNREGISTERED);
    // }

    //profile get returned to the '/auth/login/success' route as req.user

    //therefore syntax = done(null, {data returned to the route}) 
  done(null, profile);
});

passport.use(cas); 

passport.serializeUser((user, done) => {
    done(null,user);
});

passport.deserializeUser((user, done) => {
    done(null,user);
});