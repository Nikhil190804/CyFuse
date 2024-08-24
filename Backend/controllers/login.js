const User = require('../models/User')

const login = async (req, res) => {
    try {
      // Fetch data from request body
      const { email, password } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ email });
  
      // Check if user exists
      if (!user) {
        return res.status(500).json({ error: 'Invalid email or password' });
      }
  
      // Check if the password matches
      if (user.password !== password) {
        return res.status(500).json({ error: 'Invalid email or password' });
      }
  
      // If everything is fine, send a 200 OK response
      return res.status(200).json({
        message: 'Login successful!',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
  
    } catch (error) {
      // Send a 500 response if an error occurs
      return res.status(500).json({ error: 'Server error' });
    }
  };



  const signup = async (req, res) => {
    try {
      // Fetch data from request body
      const { name,email, password } = req.body;
  
      // Find the user by email
      const new_user = new User({
        name,email,password
    })

    const savedUser = await new_user.save();

      // If everything is fine, send a 200 OK response
      return res.status(200).json({
        message: 'Signup successful!',
        user: {
          id: savedUser._id,
          name: savedUser.name,
          email: savedUser.email,
        },
      });
  
    } 
    catch (error) {
      // Send a 500 response if an error occurs
      return res.status(500).json({ error: 'Server error' });
    }
  };
  
  module.exports = {login,signup}