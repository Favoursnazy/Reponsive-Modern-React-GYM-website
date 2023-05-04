import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./../../images/logo.png";
import { links } from "../../data/data";
import { GoThreeBars } from "react-icons/go";
import { FaWindowClose } from "react-icons/fa";
import "./navbar.css";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setToggle(false)}>
          <img src={Logo} alt="logo" />
        </Link>
        <ul className={`nav__links ${toggle ? "show__nav" : "hide__nav"}`}>
          {links &&
            links.map(({ name, path }, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive, isPending }) =>
                      isActive ? "active-nav" : ""
                    }
                    onClick={() => setToggle((prev) => !prev)}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
        </ul>
        <button
          className="nav__toggle_btn"
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? <FaWindowClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
