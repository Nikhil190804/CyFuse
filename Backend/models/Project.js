const mongoose = require('mongoose');

// Define the project schema
const projectSchema = new mongoose.Schema({
  project_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Active', 'Completed', 'Archived'],
    default: 'Active',
  },
  start_date: {
    type: Date,
    default: Date.now,
  },
  end_date: {
    type: Date,
  },
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  tags: {
    type: [String],
    default: [],
  },
  filter: {
    type: String,
    enum: ['Public', 'Private'],
    default: 'Public',
  },
  coleborator:{
    type:[mongoose.Schema.Types.ObjectId],
    default:[],
  }

});

// Export the project model
const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
