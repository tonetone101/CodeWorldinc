import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCode,
  faBed,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const Beliefs = () => {
  return (
    <div className="text-center">
      <div className="mb-5">
        <h1>OUR BELIEF</h1>
        <h4>To live life doing what you love</h4>
        <div className="icon">
          <FontAwesomeIcon icon={faRocket} />
        </div>
        <div className="title-underline text-center"></div>
      </div>

      <div className="row">
        <div className="col-sm-6 col-lg-4 value text-center my-3">
          <span className="value-icon">
            <div className="icon">
              <FontAwesomeIcon icon={faUtensils} />
            </div>
          </span>
          <span className="value-number">1</span>
          <h1 className="my-2 text-uppercase">eat</h1>
        </div>
        <div className="col-sm-6 col-lg-4 value text-center my-3">
          <span className="value-icon">
            <div className="icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
          </span>
          <span className="value-number">2</span>
          <h1 className="my-2 text-uppercase">code</h1>
        </div>
        <div className="col-sm-6 col-lg-4 mx-auto value text-center my-3">
          <span className="value-icon">
            <div className="icon">
              <FontAwesomeIcon icon={faBed} />
            </div>
          </span>
          <span className="value-number">3</span>
          <h1 className="my-2 text-uppercase">rest</h1>
        </div>
      </div>
    </div>
  );
};

export default Beliefs;
