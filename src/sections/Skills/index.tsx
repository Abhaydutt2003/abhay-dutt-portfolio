import SkillBadge from "../../components/SkillBadge";

const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "React",
  "Redux",
  "RTK Query",
  "React Query",
  "Daisy UI",
  "Tailwind Css",
  "Material UI",
  "Next.js",
  "Node.js",
  "Express",
  "HTML5",
  "CSS3",
  "Sass",
  "Git",
  "GitHub",
  "REST API",
  "Jest",
  "Playwright",
  "Browerstack",
  "Docker",
  "CI/CD",
  "AWS",
  "AWS EC2",
  "AWS Amplify",
  "AWS S3",
  "AWS Cloudfront",
  "PostgreSQL",
  "MongoDB",
  "SQL",
  "Prisma",
  "Mongoose",
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
