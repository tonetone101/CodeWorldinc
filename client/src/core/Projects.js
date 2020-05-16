import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Isotope from "isotope-layout";
const Projects = () => {
  // store the isotope object in one state
  const [isotope, setIsotope] = React.useState(null);
  // store the filter keyword in another state
  const [filterKey, setFilterKey] = React.useState("*");

  // initialize an Isotope object with configs
  React.useEffect(() => {
    setIsotope(
      new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      })
    );
  }, []);

  // handling filter key change
  React.useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  return (
    <div className="text-center">
      <div id="skillsHeader">
        <h1 style={{ fontWeight: "bold" }}>Projects</h1>
        <h4 style={{ color: "black" }}></h4>
        <div className="icon">
          <FontAwesomeIcon icon={faCheckSquare} />
        </div>
        <div className="title-underline text-center"></div>
      </div>
      <div className="row">
        <div className="col">
          <div className="btn-group btn-group-lg mb-5 button-group">
            {" "}
            <button onClick={() => setFilterKey("*")}>Show All</button>
            <button onClick={() => setFilterKey("UHS")}>
              University High School
            </button>
            <button onClick={() => setFilterKey("emailer")}>TICTACTOE</button>
            <button onClick={() => setFilterKey("ecommerce")}>
              E-Commerce
            </button>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="filter-container text-center ">
          <div className="text-center row">
            <div className="filter-item UHS col-md-4 mt-3">
              <div>
                <img
                  src={require("../image/whitebanner.png")}
                  height="200"
                  width="200"
                />
              </div>

              <div className="container">
                <a href="http://uhschool.org" class="search-link">
                  <span className="">UHS</span>
                </a>
                <figcaption>
                  UHSchool is a multi lingual high School based in Providence,
                  RI. Technology used are ReactJs, NodeJs, MongoDb, ExpressJs.
                  Features - Translation(spanish, cambodian, portuguese,
                  english), different user roles and privileges, responsive
                  design
                </figcaption>
              </div>
            </div>

            <div className="filter-item emailer col-md-4 mt-3">
              <div>
                <img
                  src="https://i.imgur.com/YYcwrfXm.png"
                  height="200"
                  width="200"
                />
              </div>
              <div className="container">
                <a
                  href="https://antkeo1.github.io/myTicTacToe"
                  class="search-link"
                >
                  <span className="">Tic Tac Toe</span>
                </a>
                <figcaption>
                  Got a minute? How about a game of tic tac toe!! Technology
                  used are JQuery, CSS and html. Feature - User can go 1 on 1 in
                  a classic game of TICTACTOE with a friend
                </figcaption>
              </div>
            </div>

            <div className="filter-item ecommerce col-md-4 mt-3">
              <div>
                <img
                  src="https://i.imgur.com/FPS8bBnm.png"
                  height="200"
                  width="200"
                />
              </div>
              <div className="container">
                <a
                  href="https://pvd04-squad06.github.io/Squad-project-client/"
                  class="search-link"
                >
                  <span className="">E-Commerce</span>
                </a>
                <figcaption>
                  An E-commerce web app that I helped design, while working part
                  of a development team. Technology used are Javascript, NodeJs,
                  MongoDb, ExpressJs.
                </figcaption>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
