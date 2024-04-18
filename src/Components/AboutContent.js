import "./aboutStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/aboutimg1.jpg";
import img2 from "../assets/aboutimg2.avif";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who am I?</h1>
                <p>
                    I am a React front-end developer.
                    I create responsive and secure websites for my clients.
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={img1} className="img image1" alt="About Image1" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={img2} className="img image2" alt="About Image2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
