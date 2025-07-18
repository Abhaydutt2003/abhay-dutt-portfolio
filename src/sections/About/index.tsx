import { Avatar } from "../../components";
import "./index.css";

const About = () => {
  return (
    <section id="section-container">
      <Avatar />
      <div id="about-text">
        <h1>Hi, I'm Abhay Dutt 👋 </h1>
        <h4>Full Stack developer</h4>
        <p>
          A developer with an insatiable drive to explore and master emerging
          technologies, committed to continuous improvement and professional
          growth. I approach every challenge as an opportunity to expand my
          skill set.
        </p>
      </div>
    </section>
  );
};

export default About;
