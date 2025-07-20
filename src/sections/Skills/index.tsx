import SkillBadge from "../../components/SkillBadge";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "Express",
  "HTML5",
  "CSS3",
  "Sass",
  "Tailwind CSS",
  "Styled Components",
  "Vite",
  "Webpack",
  "Git",
  "GitHub",
  "REST API",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Jest",
  "Testing Library",
  "Cypress",
  "Docker",
  "CI/CD",
  "Figma",
  "Agile",
  "Python",
  "C++",
  "Java",
  "Linux",
  "Bash",
  "Material UI",
  "Chakra UI",
  "Framer Motion",
  "Socket.io",
  "AWS",
  "GCP",
  "Vercel",
  "Netlify",
  "SEO",
  "PWA",
  "Storybook",
  // Add more as needed!
];

const SkillsSection = () => {
  return (
    <section className="section-outer-container">
      <div className="section-left-container section-heading">Skills</div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          justifyContent: "center",
        }}
      >
        {skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} size="small" />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
