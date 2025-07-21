// ... existing code ...
import { Github, Linkedin, Mail, Code } from "lucide-react";
import "./index.css";

const contacts = [
  { WebsiteName: "Github", Link: "https://github.com/Abhaydutt2003" },
  { WebsiteName: "Linkedin", Link: "https://www.linkedin.com/in/abhay-dutt" },
  { WebsiteName: "Gmail", Link: "dutt.abhay@gmail.com" },
  { WebsiteName: "Leetcode", Link: "https://leetcode.com/u/AbhayDutt/" },
];

// Helper to get the right icon
const getIcon = (name: string) => {
  switch (name) {
    case "Github":
      return <Github size={24} />;
    case "Linkedin":
      return <Linkedin size={24} />;
    case "Gmail":
      return <Mail size={24} />;
    case "Leetcode":
      return <Code size={24} />;
    default:
      return null;
  }
};

const ContactsSection = () => {
  return (
    <section className="section-container" style={{ alignItems: "start" }}>
      <div className="section-left-container section-heading">
        <p>Contacts</p>
      </div>
      <div className="section-right-container" id="contact-links">
        <ul>
          {contacts.map((contact) => (
            <li key={contact.WebsiteName}>
              {getIcon(contact.WebsiteName)}
              {contact.WebsiteName === "Gmail" ? (
                <a href={`mailto:${contact.Link}`}>{contact.Link}</a>
              ) : (
                <a
                  href={contact.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.WebsiteName}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContactsSection;
// ... existing code ...
