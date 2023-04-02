import React from "react";
import logo from "../assets/img/logo.png";

const Intro = () => {
  return (
    <section className="intro">
      <img src={logo} alt="logo" className="logo" />
      <div className="intro-heading">
        <h1>Currency converter</h1>
        <h2>Convert Euros, US Dollars, and Swiss Francs to PLN</h2>
      </div>
    </section>
  );
};

export default Intro;
