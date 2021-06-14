import React from "react";
import { useGeneralContext } from "../context/context";

const Menu = () => {
  const { menu } = useGeneralContext();
  return (
    <section className={menu ? "nav-menu-cover show-menu" : "nav-menu-cover"}>
      <div className="nav-menu">
        <p>About</p>
        <p>Discover</p>
        <p>Get Started</p>
      </div>
    </section>
  );
};

export default Menu;
