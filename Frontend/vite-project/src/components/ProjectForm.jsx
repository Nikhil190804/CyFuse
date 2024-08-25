// src/components/ProjectForm/ProjectForm.js
import React from 'react';

function ProjectForm({ createGitHubRepo }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    createGitHubRepo(title, description);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Project Title:</label>
        <input type="text" id="title" name="title" required />
      </div>
      <div>
        <label htmlFor="description">Project Description:</label>
        <textarea id="description" name="description" required></textarea>
      </div>
      <button type="submit">Create GitHub Repo</button>
    </form>
  );
}

export default ProjectForm;