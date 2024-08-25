import React, { useState } from 'react';
import './NewProject.css';

const ProjectForm = () => {
  // State to manage form input values
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectTags, setProjectTags] = useState('');
  const [projectVisibility, setProjectVisibility] = useState('Public');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      project_name: projectName,
      description: projectDescription,
      owner_id:111000,
      tags: projectTags.split(',').map(tag => tag.trim()), // Convert comma-separated tags to an array
      filter: projectVisibility,
    };

    try {
      const response = await fetch('https://cyfuse.onrender.com/api/v1/createProject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Project created successfully!');
        // Clear form after successful submission
        setProjectName('');
        setProjectDescription('');
        setProjectTags('');
        setProjectVisibility('Public');
      } else {
        alert('Failed to create the project. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error submitting the form. Please check your network connection.');
    }
  };

  return (
    <div className="project-form-container">
      <form onSubmit={handleSubmit} className="project-form">
        <h2>Create a New Project</h2>
        <div className="form-group">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="projectDescription">Project Description</label>
          <textarea
            id="projectDescription"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="projectTags">Project Tags (comma separated)</label>
          <input
            type="text"
            id="projectTags"
            value={projectTags}
            onChange={(e) => setProjectTags(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Project Visibility</label>
          <div>
            <input
              type="radio"
              id="public"
              name="visibility"
              value="Public"
              checked={projectVisibility === 'Public'}
              onChange={(e) => setProjectVisibility(e.target.value)}
            />
            <label htmlFor="public">Public</label>
          </div>
          <div>
            <input
              type="radio"
              id="private"
              name="visibility"
              value="Private"
              checked={projectVisibility === 'Private'}
              onChange={(e) => setProjectVisibility(e.target.value)}
            />
            <label htmlFor="private">Private</label>
          </div>
        </div>

        <button type="submit" className="create-btn">Create</button>
      </form>
    </div>
  );
};

export default ProjectForm;
