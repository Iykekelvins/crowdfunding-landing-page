import React from "react";
import { useGeneralContext } from "../context/context";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close-menu.svg";
const Hero = () => {
  const { menu, openMenu, closeMenu } = useGeneralContext();
  return (
    <section className="hero">
      <div className="navbar">
        <img src={logo} alt="crowdfund" className="logo" />
        <ul className="nav-list">
          <li> About</li>
          <li> Discover</li>
          <li> Get Started</li>
        </ul>
        <div className="icons">
          <img
            src={hamburger}
            alt="hamburger icon"
            className={menu ? "hamburger-icon hide-icon" : "hamburger-icon"}
            onClick={openMenu}
          />
          <img
            src={close}
            alt="close icon"
            className={menu ? "show-icon" : "close-icon"}
            onClick={closeMenu}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
