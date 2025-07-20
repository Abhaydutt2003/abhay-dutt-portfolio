import { About, Projects, WorkExperience } from "./sections";
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
    </div>
  );
}

export default App;
