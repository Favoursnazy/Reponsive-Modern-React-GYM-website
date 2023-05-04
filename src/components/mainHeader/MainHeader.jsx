import React from "react";
import { Link } from "react-router-dom";
import HeaderImage from "../../images/main_header.png";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>100 Day of Workout</h4>
          <h1>Jion The Legends of Fitness World</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.Consectetur
            maxime tempora repellendus facilis, ducimus vel.
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={HeaderImage} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
