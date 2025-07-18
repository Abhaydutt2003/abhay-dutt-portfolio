import { About } from "./sections";
import { Divider, ThemeToggle } from "./components";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <ThemeToggle />
      <About />
      <Divider />
    </div>
  );
}

export default App;
