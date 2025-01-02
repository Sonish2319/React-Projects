import React from "react";
import "./Navbar.css";
import logo from "../../assets/naruto.jpeg";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About US</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
