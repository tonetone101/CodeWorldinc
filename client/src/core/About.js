import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faGlobe } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="text-center">
      <div id="aboutHeader">
        <h1 style={{ fontWeight: "bold" }}>About Me</h1>
        <h4 style={{ color: "black" }}>
          A growth-minded individual with a love for comicbook superheroes
        </h4>
        <div className="icon">
          <FontAwesomeIcon icon={faGlobe} />
        </div>
        <div className="title-underline text-center"></div>
      </div>

      <div className="container mt-5 offset-md-1">
        <div className="text-center row">
          <div className="col-md-6">
            <img
              style={{ borderRadius: "30px" }}
              src={require("../image/me2.jpg")}
              height="300"
              width="300"
            />
            <figcaption>Founder of CodeWorldInc</figcaption>
          </div>

          <div className="col-md-6">
            <p>
              Hello, my name is Antonio Keo. As a first generation Cambodian
              American, I always knew helping others was something I wanted to
              do. Learning how my famiy came to this country and the sacrifices
              my parents made, gave me a grateful heart and the eagerness to
              give back to others. From working in retail to teaching students
              in middle schools, the opportunities I had allowed me to find
              myself and understand what I wanted to do with the rest of my
              life. My desire for growth led me to the Institute of
              Entrenprenuership and Leadership where my love for coding began.
              After the completion of the course, I signed up for Web
              Development Immersive At General Assembly to further my skills. My
              goal is to use the skills I've learned and use it for the beneft
              of others.
            </p>
            <a
              style={{ background: "#0565ff" }}
              href="https://antkeo1.github.io/react-resume/"
              className="btn btn-lg d-block w-75 text-uppercase mb-5 mx-auto"
            >
              view resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
