const express = require('express');
const router = express.Router();
const { register, login, walletBalance, verifyCustomer} = require('../middleware/user.middleware');


//user routes
router.post("/register", register);
router.post("/login", login);
router.get('/wallet-balance', walletBalance);
router.post('/verify-customer', verifyCustomer);




module.exports = router;