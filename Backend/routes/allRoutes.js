const express = require('express');
const router = express.Router();

// Import Controller 
const {login,signup} = require("../controllers/login");
const {createProject} = require("../controllers/ProjectController");


// Mapping Create
router.post("/login",login)
router.post("/signup",signup)
router.post("/createProject",createProject)

// Export Controller
module.exports = router;