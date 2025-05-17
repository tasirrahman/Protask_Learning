const express = require("express");
const router = express.Router();
const validateAuth = require('../middleware/authvalidation');
const { loginController, signupController,  forgotPasswordController } = require( "../controllers/authController" );

router.post('/login', validateAuth.signinSchema, loginController);
router.post('/signup', validateAuth.signupSchema, signupController);
router.post('/forgotpassword', validateAuth.forgotPasswordSchema, forgotPasswordController);

module.exports = router;
