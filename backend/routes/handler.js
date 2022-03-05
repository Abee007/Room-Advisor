const express = require('express');
const router = express.Router();
const passport = require('passport');


// APPLICATION ROUTES
router.get('/login', (req, res) => {
  const str = [
    {
      name: 'LoginPage',
      msg: 'Test'
    }
  ]
  res.end(JSON.stringify(str))
})

router.get('/landing', (req, res) => {
  const str = [
    {
      name: 'LandingPage',
      msg: 'Test'
    }
  ]
  res.end(JSON.stringify(str))
})

router.get('/viewreviews', (req, res) => {
  const str = [
    {
      name: 'ViewReviews',
      msg: 'Test'
    }
  ]
  res.end(JSON.stringify(str))
})

router.get('/about', (req, res) => {
  const str = [
    {
      name: 'About',
      msg: 'Test'
    }
  ]
  res.end(JSON.stringify(str))
})

router.post('/addFavorite', (req, res) => {
    res.end('NA');
});


// Redirects users to register if they don't exist in database
router.get('/validateUser', (req, res) => {
    console.log("here in validate");
    
    if(req.user.id === 'akm6') {
        res.redirect('http://localhost:3000/register');
    }
    res.redirect('http://localhost:3000/viewreviews');

});

/// /////////////////////////

// CAS AUTHENTICATION ROUTE

/// //////////////////////////
const CLIENT_URL = 'http://localhost:3000/'

router.get('/auth/login/success', (req, res) => {
  if (req.user) {
    return res.status(200).json({
      success: true,
      message: 'Successfully logged in with CAS',
      user: req.user,
      cookies: req.cookies
    })
  }
  return res.status(200).json({
    success: false,
    message: 'Failed to Login with CAS'
  })
})

router.get('/auth/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'Failed to Login with CAS'
  })
})

router.get('/auth/cas/logout', (req, res) => {
    console.log("here in logout")
    req.logout();
    res.redirect('http://localhost:3000/logout');
});

router.get('/auth/cas',
      passport.authenticate('cas', { failureRedirect: '/auth/login/failed' }),
      function(req, res) {
        // Successful authentication, redirect home.
        console.log("Redirect here to reviews page")
        res.redirect('http://localhost:3000/checkuser');
      });


module.exports = router;
