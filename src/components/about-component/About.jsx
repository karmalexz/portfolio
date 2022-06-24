import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { HiAcademicCap } from "react-icons/hi";
import { WiMeteor } from "react-icons/wi";
import { GiStack } from "react-icons/gi";
import { AiOutlineProject } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <HiAcademicCap className="about__icon" />
              <h5>Academic</h5>
              <small>USYD B.Computer Science</small>
            </article>
            <article className="about__card">
              <WiMeteor className="about__icon" />
              <h5>Hobbies</h5>
              <small>Cooking, Hiking, Plants, Photography and more.</small>
            </article>
            <article className="about__card">
              <AiOutlineProject className="about__icon" />
              <h5>Projects</h5>
              <small>6 hands-on projects so far with front-end and back-end tech stacks. </small>
            </article>
          </div>
          <p>
            I am a graduate from USYD, Bachelor of Computer Science and
            technology, I finished the software engineering immersive course at
            General Assembly in February.<br></br> I have hands-on experience
            with frontend and backend projects. By utilizing my professional
            skills and teamwork skill that I obtained from my previous
            employment, I would like to get a frontend or fullstack developer
            position.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
