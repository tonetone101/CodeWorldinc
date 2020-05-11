import React from "react";
import Menu from "./Menu";
import "../App.css";
import { SocialIcon } from "react-social-icons";

const renderFooter = () => (
  <footer className="text-center" id="footer">
    <div className="row">
      <div className="col-md-6 mt-3">
        <div className="footer-icons">
          <a href="https://github.com/Antkeo1">
            <SocialIcon url="https://github.com/Antkeo1" />
          </a>
          <a href="https://www.linkedin.com/in/antonio-keo-63b17b168">
            <SocialIcon url="https://www.linkedin.com/in/antonio-keo-63b17b168" />
          </a>
        </div>
      </div>
      <div className="col-md-6 mt-3">
        <h5 className="text-capitalize">&copy;2020 copyright : Coder</h5>
      </div>
    </div>
  </footer>
);

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => {
  return (
    <div>
      <Menu />
      <div className="jumbotron">
        <h2>{title}</h2>

        <p className="lead">{description}</p>
      </div>

      <div className={className}>{children}</div>
      {renderFooter()}
    </div>
  );
};

export default Layout;
