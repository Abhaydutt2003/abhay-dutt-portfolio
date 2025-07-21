import { Link } from "lucide-react";
import { Avatar, Divider } from "../../components";
import "./index.css";
const companies = [
  {
    name: "GyanGrove",
    time: "July 2024 - April 2025",
    imageUrl: "/gg-logo.jpg",
    role: "Software Engineer Intern",
    link: "https://res.cloudinary.com/dsihfpv6p/image/upload/Experience_Certificate_GyanGrove_Abhay_boaiqb.pdf",
    companyLink:
      "https://www.linkedin.com/company/gyangrove/posts/?feedView=all",
    descripion:
      "As an early team member at GyanGrove, I contributed across the stack—starting with frontend (React/Next.js) and growing into full-stack development using Node.js, Express, and AWS. I built core features like an end-to-end admission CRM, school-wide role-based systems, and AI-powered content generation tools in React Native. I also developed CI pipelines integrated with GitHub Actions and BrowserStack to fully automate testing. Constantly adapting to new challenges, I played a key role in shaping the product and engineering practices at the startup. ",
    skills: [
      "Typescript",
      "Javascript",
      "Python",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS",
      "React Native",
      "Expo",
      "DaisyUi",
      "GitHub Actions",
      "BrowserStack",
      "Playwright",
      "CI/CD",
    ],
  },
  {
    name: "Coding Ninjas",
    time: "May 2023 - Sept 2023",
    imageUrl: "/coding-ninjas.png",
    role: "Teaching Assistant",
    companyLink:
      "https://www.linkedin.com/school/codingninjas/posts/?feedView=all",
    link: "https://res.cloudinary.com/dsihfpv6p/image/upload/teaching-assistant-certificate_jtrdgs.pdf",
    descripion:
      "Mentored and supported over 500 students in mastering Data Structures & Algorithms and the MERN stack. Conducted doubt-solving sessions, code reviews, and provided personalized guidance throughout their learning journey. Maintained a high student satisfaction rating of 4.7/5, reflecting consistent and impactful teaching.",
    skills: [
      "Data Structures",
      "Algorithms",
      "MERN Stack",
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Code Review",
      "Mentoring",
    ],
  },
];

function highlightKeywords(description: string, keywords: string[]) {
  const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);
  const regex = new RegExp(`(${sortedKeywords.join("|")})`, "gi");
  const parts = description.split(regex);

  return parts.map((part, i) =>
    sortedKeywords.some(
      (keyword) => part.toLowerCase() === keyword.toLowerCase()
    ) ? (
      <strong key={i}>{part}</strong>
    ) : (
      part
    )
  );
}

const WorkExperience = () => {
  return (
    <section className="section-outer-container" id="work-section">
      <div className=" section-left-container section-heading">
        <p>Work Experience</p>
      </div>
      {companies.map((company, index) => {
        return (
          <div className="section-container" key={company.name}>
            <div className="section-left-container">
              <a
                className="company-logo"
                href={company.companyLink}
                title="Click to go to linkdin page"
              >
                <Avatar
                  imageUrl={company.imageUrl}
                  alt={`${company.name} logo`}
                  className="avatar-size-small sm:avatar-size-x-small"
                />
                <h5>{company.name}</h5>
                <span>{company.time}</span>
              </a>
            </div>
            <div className="section-right-container experience-description">
              <a
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to see experience certificate"
              >
                <h2>{company.role}</h2>
                <Link />
              </a>
              <p>
                {highlightKeywords(company.descripion, company.skills || [])}
              </p>
              {/* <div className="skills-container">
                {company.skills?.map((skill, skillIndex) => (
                  <SkillBadge key={skillIndex} skill={skill} size="x-small" />
                ))}
              </div> */}
              {index < companies.length - 1 && (
                <Divider noBottomPadding={true} />
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default WorkExperience;
