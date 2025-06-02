import React from "react";
import img1 from "../../assets/passwordgen.png";
import img2 from "../../assets/Emp.png";
import img3 from "../../assets/Todo.png";

const projects = [
  {
    title: "Password-Generator",
    description:
      "A Password-Generator website built with React and Tailwind CSS showcasing my skills and projects.",
    image: img1,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/krishnapal81/Password--Generator",
    demo: "https://passwordcreator-iota.vercel.app/",
  },
  {
    title: "Employee Task Assigner",
    description:
      "A task management app with CRUD features, real-time notifications and user authentication.",
    image: img2,
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"],
    github: "https://github.com/krishnapal81/TaskAssigner/tree/master",
    demo: "https://taskassignerr.netlify.app/",
  },
  {
    title: "ToDo App",
    description:
      "A simple and intuitive ToDo app that allows users to add, edit, delete, and mark tasks as complete. Built using React, it helps manage daily tasks efficiently with a clean and responsive user interface",
    image: img3,
    tech: ["Html", "CSS", "Javascript", "React"],
    github: "https://github.com/krishnapal81/TodoApp",
    demo: "https://todo-app-tau-lovat-91.vercel.app/",
  },
];

const ProjectCard = ({ project }) => (
  <div
    className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition duration-500 ease-in-out
      hover:scale-[1.03] hover:shadow-2xl hover:border-4 hover:border-gradient-to-r hover:border-indigo-500 hover:from-indigo-500 hover:to-purple-600
      flex flex-col"
    style={{
      borderImageSlice: 1,
      borderImageSource:
        "linear-gradient(90deg, #6366F1, #8B5CF6)", // Indigo to Purple gradient
    }}
  >
    <div className="overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
      <p className="text-gray-700 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-4 mb-6">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition-transform transform hover:scale-105"
        >
          Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow text-center border border-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold py-2 rounded-md transition-transform transform hover:scale-105"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-50 py-20 px-6 sm:px-12 md:px-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">My Projects</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          A showcase of my work. Check out some of the projects I’ve built using
          modern web technologies.
        </p>
      </div>

      <div
        className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        style={{ animation: "fadeInUp 0.8s ease forwards" }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>

      {/* Add simple fadeInUp keyframes animation */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
