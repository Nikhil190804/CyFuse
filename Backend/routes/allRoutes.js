const express = require('express');
const router = express.Router();

// Import Controller 
const {login,signup} = require("../controllers/login");


// Mapping Create
router.post("/login",login)
router.post("/signup",signup)

// Export Controller
module.exports = router;