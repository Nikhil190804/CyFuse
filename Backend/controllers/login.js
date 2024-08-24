const User = require('../models/User')

// business Logic
exports.login = async (req, res) => {
    try {
        // fetch data from request body 
        return res.status(200).json({
            error : "done h brdr",            
        })
        
    }
    catch (err) {
        return res.status(500).json({
            error : "Error while creating comment",            
        })
    }
}
