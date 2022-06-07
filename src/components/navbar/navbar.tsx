import React, { useEffect, useState } from "react";
import Logo from "../../assets/nextflix-logo.png";
import Avatar from "../../assets/Netflix-avatar.png";
import "./navbar.css";
const NavBar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }

      return () => {
        //window.removeEventListener<scroll>('scroll');
      };
    });
  }, []);
  return (
    <div className={`navbar ${show && "navbar__color"}`} data-testid="nav">
      <img
        src={Logo}
        alt="netflix__logo"
        className="navbar__logo"
        data-testid="navbar-img"
      />
      <img
        src={Avatar}
        alt="netflix_avatar"
        className="navbar__avatar"
        data-testid="navbar-img"
      />
    </div>
  );
};

export default NavBar;
