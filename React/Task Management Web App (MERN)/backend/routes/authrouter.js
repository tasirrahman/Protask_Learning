const express = require('express');
const validateAuth = require( '../middleware/authvalidation' );
const { signup } = require( '../controllers/signupcontroller' );
const router = express.Router(); // Correct initialization

router.post('/signin', (req, res) => {
    res.send('Sign in successful');
});

router.post('/signup', validateAuth, signup);

router.post('/forgotpassword', (req, res) => {
    res.send('Forgot password successful');
});

module.exports = router;
