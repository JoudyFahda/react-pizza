import React from "react";
import AboutPizza from "../assets/aboutPizza.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutPizza})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Created by a Lebanese student, in 2022. Sharing with you our love of
          pizza !!
        </p>
      </div>
    </div>
  );
}

export default About;
// our div will be separated into 2 parts: the picture and the text
