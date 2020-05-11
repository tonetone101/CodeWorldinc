import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { list, uri, remove } from "./homeApi";
import { isAuthenticated } from "../auth/index";
import { Link } from "react-router-dom";
import About from "./About";
import Beliefs from "./Beliefs";
import Projects from "./Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [post, setPost] = useState([]);

  const loadPost = () => {
    list().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setPost(data);
      }
    });
  };

  useEffect(() => {
    loadPost();
    console.log(post);
  }, []);

  const renderPost = () => {
    return post.map((results, i) => {
      const postPhoto = results._id
        ? `/post/photo/${results._id}?${new Date().getTime()}`
        : "";

      return (
        <div key={i} className="container mt-5 mb-2">
          {/*<div className="row">*/}
          {/*<div className="col-md-3" id="post">
            <img
              src={postPhoto}
              style={{
                height: "150px",
                width: "150px",
                borderRadius: "10px",
              }}
            />
          </div>*/}

          <div id="postText" className="text-center">
            <div id="postHeader">
              <h4>{results.title}</h4>
              <p className="lead">{results.about}</p>
            </div>
          </div>
          {isAuthenticated() && isAuthenticated().user.code === 2609 && (
            <Link to={`/post/${results._id}`}>View</Link>
          )}
        </div>
        //</div>
      );
    });
  };

  const renderEmail = () => (
    <div
      style={{
        fontWeight: "bold",
      }}
      className="text-center lead mt-5 mb-5"
    >
      <div id="emailDiv" className="container-fluid">
        <a id="email" href="mailto:AntonioKeo@codeworldinc.org">
          <h1
            id="emailClick"
            style={{ color: "black", fontWeight: "bold", fontStyle: "italic" }}
          >
            LET'S CONNECT!
          </h1>
          <p
            id="emailClick"
            style={{ color: "black", textDecoration: "underline" }}
          >
            click here to send email
          </p>
        </a>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="container-fluid">
      <div className="column">
        <div className="row text-center">
          <div className="col-md-6 mb-5">
            <img
              id="skills"
              src={require("../image/mongodb.jpg")}
              height="200"
              width="400"
            />
          </div>
          <div className="col-md-6 ">
            <img
              id="skills"
              src={require("../image/expressjs.jpeg")}
              height="200"
              width="400"
            />
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-6 mt-5">
            <img
              id="skills"
              src={require("../image/react.png")}
              height="200"
              width="400"
            />
          </div>

          <div className="col-md-6 mt-5">
            <img
              style={{ background: "black" }}
              id="skills"
              src={require("../image/nodejs.png")}
              height="200"
              width="400"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <p
          className="text-center mt-5 mb-5 lead"
          style={{ color: "black", marginBottom: "50px" }}
        >
          At CodeWorldInc, MERN stack(Mongodb, EpressJs, ReactJs, NodeJs) is
          used often. A stack is the combination of technologies used to create
          a web application. Any web application will be made using multiple
          technologies (frameworks, libraries, databases etc). The MERN stack is
          a JavaScript stack that’s designed to make the development process
          smoother. MERN includes four open-source components: MongoDB, Express,
          React, and Node.js. These components provide an end-to-end framework
          for developers to work in.
        </p>
      </div>
    </div>
  );

  return (
    <Layout
      title="Welcome!"
      description="CODEWORLDINC"
      className="container-fluid"
    >
      <div>
        <div id="postBackground" className="column mt-5 container">
          {renderPost(post)}
        </div>
        <div id="about">
          <About />
        </div>

        <div
          id="skillsBackground"
          id="aboutBackground"
          className="text-center mb-5 mt-5"
        >
          <div id="skillsHeader">
            <h1>Technology Used</h1>
            <h4 style={{ color: "black" }}>MERN stack</h4>
            <div className="icon">
              <FontAwesomeIcon icon={faCheckSquare} />
            </div>
            <div className="title-underline text-center"></div>
          </div>
          {renderSkills()}
        </div>

        <div id="projects">
          <Projects />
        </div>

        {renderEmail()}
        <div className="mb-5">
          <Beliefs />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
