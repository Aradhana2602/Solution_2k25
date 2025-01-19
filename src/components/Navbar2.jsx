import React, { useState } from "react";
import "./Navbar2.css";

function Navbar2() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar2">
      <img src="Assets/logo.svg" alt="Solutions logo" className="solutions-logo2" />
      <div className={`hamburger-button2 ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`main-navbar2 ${menuActive ? "active" : ""}`}>
        <a href="/"><img className="nav_btn_img" src="Assets/home.svg" alt="home-icon" /></a>
        <a href="./events"><img className="nav_btn_img" src="Assets/about us.svg" alt="About-us" /></a>
        <a href="./team"><img className="nav_btn_img" src="Assets/our team.svg" alt="Our-Team" /></a>
        <a href="./schedule/index.html?index=0"><img className="nav_btn_img" src="Assets/Register.svg" alt="register" /></a>
      </div>
    </nav>
  );
}

export default Navbar2;