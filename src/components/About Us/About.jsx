import React from "react";
import "./About.css"
import Navbar from "../Navbar/Navbar";
const About = () => {
    return (
        <>
        <Navbar />
        <br />
        <br />
        <div className="grid-container-1">
        <div className="item1"></div>
        <div className="item2">
            <h2 className="about">About Us</h2>
            <h1 className="h1">We Provide The Best
                Property For you.
            </h1>
            <p className="hhh2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam dolorum ea reiciendis culpa, 
                fugit nobis odio ipsa! Pariatur, praesentium quam!
            </p>
            <p className="hhh2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam dolorum ea reiciendis culpa, 
                fugit nobis odio ipsa! Pariatur, praesentium quam!
            </p>
            <p className="hhh2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam dolorum ea reiciendis culpa, 
                fugit nobis odio ipsa! Pariatur, praesentium quam!
            </p>
            <button className="btn">Learn more</button>
        </div>
        </div>
        </>
    )
}

export default About