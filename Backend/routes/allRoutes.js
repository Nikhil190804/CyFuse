const express = require('express');
const router = express.Router();

// Import Controller 
const {login,signup} = require("../controllers/login");
const {create} = require("../controllers/ProjectController");


// Mapping Create
router.post("/login",login)
router.post("/signup",signup)
router.post("/createProjects",create)

// Export Controller
module.exports = router;