import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
        <img className = "card-img" src={project.img} alt={project.title} />
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
    </div>
  );
}

export default ProjectCard;
// This component is used to display individual project cards in the Projects section of the portfolio.
// It receives a project object as a prop and renders the title and description of the project.
// The component can be used in a map function to display multiple projects dynamically.