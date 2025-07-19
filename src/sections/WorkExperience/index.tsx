import { Avatar, Divider } from "../../components";
import "./index.css";
const companies = [
  {
    name: "GyanGrove",
    time: "July 2024 - April 2025",
    imageUrl: "/gg-logo.jpg",
    role: "Software Engineer Intern",
    descripion:
      "As an early Software Engineer Intern at Gyangrove, I was a founding member who evolved from frontend to full-stack, building a complete admission management CRM and critical features using JavaScript, TypeScript, Node.js, Next.js, and AWS. I also automated testing with Playwright & GitHub Actions and developed AI content generation and role-based management on React Native.",
  },
  {
    name: "Coding Ninjas",
    time: "May 2023 - Sept 2023",
    imageUrl: "/coding-ninjas.png",
    role: "Teaching Assistant",
    descripion:
      "At Coding Ninjas, I taught 500+ students MERN stack and DSA, achieving a 4.7/5 rating. I focused on explaining complex technical concepts and solving coding challenges, greatly enhancing my technical communication skills.",
  },
];

const WorkExperience = () => {
  return (
    <section className="section-outer-container" id="work-section">
      <div className="section-left-container section-heading">
        <p>Work Experience</p>
      </div>
      {companies.map((company, index) => {
        return (
          <div className="section-container">
            <div className="section-left-container">
              <div className="company-logo">
                <Avatar
                  imageUrl={company.imageUrl}
                  alt={`${company.name} logo`}
                  className="avatar-size-small xs:avatar-size-x-small"
                />
                <h5>{company.name}</h5>
                <span>{company.time}</span>
              </div>
            </div>
            <div className="section-right-container experience-description">
              <h2>{company.role}</h2>
              <p>{company.descripion}</p>
              {/* <a
                href="https://res.cloudinary.com/dsihfpv6p/image/upload/v1752930236/Experience_Certificate_GyanGrove_Abhay_boaiqb.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dsihfpv6p/image/upload/v1752930236/Experience_Certificate_GyanGrove_Abhay_boaiqb.pdf"
                  alt="Certificate preview"
                  style={{
                    width: "300px",
                    height: "100px",
                    borderRadius: "8px",
                  }}
                />
              </a> */}
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
