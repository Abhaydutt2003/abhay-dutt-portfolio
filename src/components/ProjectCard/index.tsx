import { Globe, Github } from "lucide-react";
import { VideoPlayer, SkillBadge } from "../";
import "./index.css";

interface ProjectCardProps {
  videoId: string;
  description: string;
  skills: string[];
  websiteUrl: string;
  githubUrl: string;
  title: string;
}

const ProjectCard = ({
  videoId,
  description,
  skills,
  websiteUrl,
  githubUrl,
  title,
}: ProjectCardProps) => {
  return (
    <div className="project-card">
      <VideoPlayer width={305} height={180} videoId={videoId} />
      <div className="description-skills-container">
        <h5>{title}</h5>
        <p className="project-description">{description}</p>
        <div className="project-skills">
          {skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} size="xx-small" />
          ))}
        </div>
        <div className="project-links">
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            <Globe />
            Website
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
