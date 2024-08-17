import React from "react";
import "../css/style.css";
import about from "../imgs/about.jpg";

function About() {
  return (
    <div className="aboutPageBox">
      <h1 className="aboutHeading">About Us</h1>
      <img src={about} alt="About Us" className="about-image" />
      <p className="aboutContent">
        Welcome to Recipe Book, your one-stop destination for discovering and
        sharing amazing recipes. Our goal is to inspire home cooks of all skill
        levels to create memorable meals for their families and friends. We
        believe that cooking should be fun, easy, and accessible to everyone.
      </p>
      <p className="aboutContent">
        At Recipe Book, we take great pride in our wide collection of recipes,
        ranging from breakfast delights to hearty dinners and everything in
        between. Our passionate team of food enthusiasts carefully curates and
        tests each recipe to ensure they are not only delicious but also easy to
        follow.
      </p>
      <p className="aboutContent">
        Whether you're a professional chef or just starting out in the kitchen,
        we hope you find our app both useful and enjoyable. Thank you for being
        part of our culinary community!
      </p>
    </div>
  );
}

export default About;
