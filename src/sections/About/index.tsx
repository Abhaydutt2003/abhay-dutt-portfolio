import { Avatar } from "../../components";
import "./index.css";

const About = () => {
  return (
    <section id="section-container">
      <Avatar />
      <div id="about-text">
        <h1>Abhay Dutt</h1>
        <h4>Software Engineer</h4>
        <p>
          A Full-Stack Developer with a drive for innovation, effortlessly
          mastering any technology to build comprehensive and scalable solutions
          from concept to deployment.
        </p>
      </div>
    </section>
  );
};

export default About;
