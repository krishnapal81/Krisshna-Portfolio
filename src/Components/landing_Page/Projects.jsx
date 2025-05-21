import React from "react";
import img from "../../assets/passwordgen.png"

const projects = [
  {
    title: "Password-Generator",
    description: "A Password-Generator website built with React and Tailwind CSS showcasing my skills and projects.",
    image: img,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/krishnapal81/Password--Generator",
    demo: "https://passwordcreator-iota.vercel.app/",
  },
  {
    title: "Employee Task Assigner",
    description: "A task management app with CRUD features, real-time notifications and user authentication.",
    image: "https://source.unsplash.com/600x400/?app,task",
    tech: ["React", "Node.js", "MongoDB","Tailwind CSS"],
    github: "https://github.com/krishnapal81/EmployeeTaskAssigner",
    demo: "https://taskmanager.com",
  },
  {
    title: "E-commerce Store",
    description: "An e-commerce platform with product listing, shopping cart, and payment gateway integration.",
    image: "https://source.unsplash.com/600x400/?ecommerce,store",
    tech: ["React", "Redux", "Stripe"],
    github: "https://github.com/yourusername/ecommerce-store",
    demo: "https://ecommercestore.com",
  },
];

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:-translate-y-3 hover:shadow-2xl max-w-sm mx-auto">
    <img src={project.image} alt={project.title} className="w-full h-48 bg-white flex items-center justify-center overflow-hidden" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md hover:shadow-lg transition-shadow cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition-colors"
        >
          Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow text-center border border-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold py-2 rounded-md transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-50 py-20 px-6 sm:px-12 md:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">My Projects</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          A showcase of my work. Check out some of the projects I’ve built using modern web technologies.
        </p>
      </div>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
