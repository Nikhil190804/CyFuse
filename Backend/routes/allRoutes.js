const express = require('express');
const router = express.Router();

// Import Controller 
const {login} = require("../controllers/login");


// Mapping Create
router.get("/login",login)

// Export Controller
module.exports = router;