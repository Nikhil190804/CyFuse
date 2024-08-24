const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// middleware 
app.use(express.json());

//const allRoutes = require('./routes/allRoutes');

// mount 
//app.use("/api/v1",allRoutes);

const dbConnect = require('./config/database');
dbConnect();

// Start Server 
app.listen(PORT,()=>{
    console.log("App is Running at the",PORT);
})

