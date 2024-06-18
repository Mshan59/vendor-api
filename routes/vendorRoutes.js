const express = require("express");
const { getVendorUsers } = require("../controllers/vendorController");
const router = express.Router();
 router.get('/getVendorUsers' , getVendorUsers);

module.exports = router;