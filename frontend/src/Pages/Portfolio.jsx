import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Docker Monitoring Stack",
    description:
      "Monitoring system using Prometheus, Grafana and Docker Compose.",
    tech: "Docker • Grafana • Prometheus",
    github: "https://github.com/Sujeet4363",
    live: "#",
  },

  {
    title: "Jenkins CI/CD Pipeline",
    description:
      "Automated CI/CD pipeline for deployment and testing.",
    tech: "Jenkins • Linux • GitHub",
    github: "https://github.com/Sujeet4363",
    live: "#",
  },

  {
    title: "MongoDB Sharding",
    description:
      "Distributed MongoDB cluster implementation with sharding.",
    tech: "MongoDB • Linux",
    github: "https://github.com/Sujeet4363",
    live: "#",
  },
];

export default function Portfolio() {
  return (
    <section className="text-white py-20 px-6">

      <h1 className="text-5xl font-bold text-center mb-16">
        My Projects 🚀
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-8 hover:scale-105 transition duration-300 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4">
              {project.title}
            </h2>

            <p className="text-gray-300 mb-4">
              {project.description}
            </p>

            <p className="text-blue-400 mb-6">
              {project.tech}
            </p>

            <div className="flex gap-4">

              <a
                href={project.github}
                target="_blank"
                className="bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded-lg flex items-center gap-2"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg flex items-center gap-2"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}