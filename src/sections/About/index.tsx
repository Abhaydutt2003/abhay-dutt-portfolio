import { Avatar } from "../../components";
import "./index.css";

const About = () => {
  return (
    <section className="section-container">
      <div className="section-left-container">
        <Avatar
          imageUrl="/avatar.png"
          alt="avatar-img"
          className=" avatar-size-large md:avatar-size-medium sm:avatar-size-small xs:avatar-size-x-small"
        />
      </div>
      <div className="section-right-container">
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
      </div>
    </section>
  );
};

export default About;
