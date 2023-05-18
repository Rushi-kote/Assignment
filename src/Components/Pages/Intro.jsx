import React from "react";
import logo from "./../Assets/LogoAsset.png";
import tick from "./../Assets/Group 194.png";
import "../Styles/Intro.css";
import Form from "./Form";

const Intro = () => {
  return (
    <div className="intro-div-main-container">
      <div className="intro-div-logo-container">
        <img className="intro-div-logo-content" src={logo} alt="Logo" />
      </div>
      <div className="intro-div-content-container">
        <div className="intro-div-content-heading">
          <p className="aktifoa-book">
            Take your graphics protection to the next level with DOL Max
            overlaminates
          </p>
        </div>
        <div className="intro-div-content-para">
          <p className="aktifoa-light">Pair with MPI 1105 wrapping film for ramped up protection</p>
        </div>
        <div className="intro-div-content-logos">
          <div className="intro-div-content-logos-flexItems">
            <div className="img-container">
              <img src={tick} alt="" />
            </div>
            <p>Maximum Durability</p>
          </div>
          <div className="intro-div-content-logos-flexItems">
            <div className="img-container">
              <img src={tick} alt="" />
            </div>
            <p>Maximum Durability</p>
          </div>
          <div className="intro-div-content-logos-flexItems">
            <div className="img-container">
              <img src={tick} alt="" />
            </div>
            <p>Maximum Durability</p>
          </div>
        </div>
       
      </div>
      <div className="display">
            <Form/>
        </div>
    </div>
  );
};

export default Intro;
