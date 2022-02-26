const express = require('express');
const router = express.Router();

router.get('/landing', (req, res) => {
    const str = [
        {
            "name": "LandingPage",
            "msg": "Test"
        }
    ];
    res.end(JSON.stringify(str));
});

router.get('/viewreviews', (req, res) => {
    const str = [
        {
            "name": "ViewReviews",
            "msg": "Test"
        }
    ];
    res.end(JSON.stringify(str));
});

router.post('/addFavorite', (req, res) => {
    res.end('NA');
});

module.exports = router;