const express = require('express');
const app = express();
const cors = require('cors')

require("dotenv").config();
const PORT = 3000;

app.use(cors()); 

// middleware 
app.use(express.json());

const allRoutes = require('./routes/allRoutes');

// mount 
app.use("/api/v1",allRoutes);

const dbConnect = require('./config/database');
dbConnect();

// Start Server 
app.listen(PORT,()=>{
    console.log("App is Running at the",PORT);
})