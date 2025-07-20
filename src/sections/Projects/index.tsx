import { ProjectCard } from "../../components";
import "./index.css";

const projects = [
  {
    title: "Voyage",
    videoId: "Screen_Recording_2025-07-19_at_7.41.43_PM_llu3ay",
    description:
      "Voyage is a production-ready, geo-enabled web platform designed for modern property management and discovery",
    skills: [
      "AWS EC2",
      "AWS RDS",
      "PostGIS",
      "AWS S3",
      "AWS CloudFront",
      "Express.js",
      "Next.js",
      "Redux.js",
      "RTK Query",
    ],
    websiteUrl: "https://master.d3qoia8hz89za5.amplifyapp.com/",
    githubUrl: "https://github.com/Abhaydutt2003/voyage.git",
  },
  {
    title: "ComfyStore",
    videoId: "Screen_Recording_2025-07-19_at_7.44.43_PM_mswg4u",
    description:
      "Comfy Store is a responsive e-commerce frontend application built with React 18 and modern tooling.",
    skills: [
      "react",
      "react-query",
      "react-router",
      "daisyui",
      "redux",
      "tailwind-css",
    ],
    websiteUrl: "https://example.com/project2",
    githubUrl: "https://github.com/username/project2",
  },
];

const Projects = () => {
  return (
    <section className="section-outer-container">
      <div className="section-left-container section-heading">Projects</div>
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard key={project.videoId} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
