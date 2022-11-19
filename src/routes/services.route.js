const express = require("express");
const router = express.Router();
const { purchaseAirtime, purchaseData, electricity, tv} = require('../middleware/services.middleware');




//services routes
router.post('/airtime', purchaseAirtime)
router.post('/data', purchaseData)
router.post('/electricity', electricity)
router.post('/tv', tv)






module.exports = router;