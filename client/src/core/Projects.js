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
        <h1>Projects</h1>
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
            <button onClick={() => setFilterKey("emailer")}>Emailer</button>
            <button onClick={() => setFilterKey("ecommerce")}>
              E-Commerce
            </button>
          </div>
        </div>
      </div>

      <hr />
      <div className="text-center">
        <div className="filter-container text-center ">
          <div className="text-center row">
            <div className="filter-item UHS col-md-4">
              <div>
                <img height="200" width="200" />
              </div>
              <div>
                <span className="">UHS</span>
              </div>
            </div>
            <div className="filter-item emailer  col-md-4">
              <div>
                <img height="200" width="200" />
              </div>
              <div>
                <a
                  href="https://pvd04-squad06.github.io/Squad-project-client/"
                  class="search-link"
                >
                  <span className="">Emailer</span>
                </a>
              </div>
            </div>
            <div className="filter-item ecommerce  col-md-4">
              <div>
                <img height="200" width="200" />
              </div>
              <div>
                <a
                  href="https://pvd04-squad06.github.io/Squad-project-client/"
                  class="search-link"
                >
                  <span className="">E-Commerce</span>
                </a>
                <figcaption>
                  An E-commerce web app that I helped design. Technology used
                  are Javascript, NodeJs, MongoDb, ExpressJs
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
