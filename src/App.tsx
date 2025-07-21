import {
  About,
  ContactsSection,
  Projects,
  SkillsSection,
  WorkExperience,
} from "./sections";
import { Divider, ThemeToggle } from "./components";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <ThemeToggle />
      <About />
      <Divider />
      <WorkExperience />
      <Divider />
      <Projects />
      <Divider />
      <SkillsSection />
      <Divider />
      <ContactsSection />
    </div>
  );
}

export default App;
