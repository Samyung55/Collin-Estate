import React from "react";
import "./Hero.css";
import pattern from "../../assets/pattern.svg";

const Hero = () => {
  return (
    <>
      <div className="grid-container">
        <div className="svg-container1">
        <svg className="svg-pattern1" width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='20' height='21.5' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(35, 100%, 96%, 1)'/><path d='M10-6V6M10 14v12M26 10H14M6 10H-6'  stroke-linecap='square' stroke-width='0.5' stroke='hsla(33, 90%, 65%, 0.54)' fill='none'/></pattern></defs><rect width='800%' 
        height='800%' transform='translate(0,0)' fill='url(#a)'/></svg>
        <div className="svg-container1">
        <svg className="svg-pattern2" width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='20' height='24.5' patternTransform='scale(2) rotate(135)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(35, 100%, 96%, 1)'/><path d='M10-6V6M10 14v12M26 10H14M6 10H-6'  stroke-linecap='square' stroke-width='2.5' stroke='hsla(33, 90%, 65%, 0.12156862745098039)' fill='none'/></pattern></defs><rect 
        width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/></svg>
        </div>
        </div>
        <div className="hero-1">
          <h1>Discover most Suitable Property</h1>
          <p className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatem ut ea distinctio itaque odit
            veniam a ut non magni ipsum sequi minima rerum possimus?
          </p>
          <div className="grid0">
            <div className="items">
              <h2 className="hhh">5k+</h2>
              <p className="subhead">Premium Product</p>
            </div>
            <div className="items">
              <h2 className="hhh">3k+</h2>
              <p className="subhead">Happy Customer</p>
            </div>
            <div className="items">
              <h2 className="hhh">20+</h2>
              <p className="subhead">Awards Winning</p>
            </div>
          </div>
        </div>
        <div className="hero-2"></div>
      </div>
    </>
  );
};

export default Hero;
