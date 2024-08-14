import React from 'react';
import ProjectCard from './ProjectCard'; // Ensure you have a ProjectCard component

const Projects = () => {
  // Example project data
  const projects = [
    { id: 1, title: 'E-commerce Website', description: 'Developed a full-featured e-commerce site with MERN stack, including user authentication, product management, and payment gateway integration.', link: 'https://github.com/AkshayVaghela27/E-Commerce/tree/main/Documents/E-Commerce' },
    { id: 2, title: 'Nearby Solution', description: 'Created a platform for finding nearby services with secure authentication, map integration, and feedback functionality.', link: 'https://github.com/AkshayVaghela27/Near_By_Solution' },
    // Add more projects as needed
  ];

  return (
    <div
      name="projects"
      id='projects'
      className="w-full py-16 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="text-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline-block pb-2">
            Projects
          </p>
          <p className="py-6">
            Here are some of the projects I've worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;