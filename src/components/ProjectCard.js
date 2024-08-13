import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
