import React from "react";
import { Link } from "react-router-dom";
import '../About/About.css'
import myPDF from '../Assets/Resume.pdf'

const About = () => {
    return(
        <div id="about" className="about" data-aos="fade-right">
            <div className="img-parent">
                <div className="img">
                </div>
            </div>
            <div className="aboutInfo">
                <p>I am a final year electrical engineering student at NUST, specializing in machine learning and computer vision. Being an innovative tech enthusiast, I like to learn and try new things that can provide a solution to any of the modern world problems. This led me to a self-learning path during which I learned about deep learning, web development and programming different boards like Arduino and FPGA.<br /><br />
                    Right now, I am open to project ideas, so feel free to reach me on LinkedIn or my email.
                </p>
                <a href={myPDF} download="Resume.pdf" className="btn">Download CV</a>
            </div>            
        </div>
    );
}


export default About;