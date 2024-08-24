const express = require('express');
const router = express.Router();

// Import Controller 
const {login} = require("../controllers/login");


// Mapping Create
router.post("/login",login)

// Export Controller
module.exports = router;