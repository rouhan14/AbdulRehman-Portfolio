import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import '../Home/Home.css'


const Home = () => {
    return(
        <div id='home' className='home'>
            <div className='nvc'>
                <div className='nvcImg'></div>
                <p>Faysal Bank</p>
                <p>Acc NO: 3173383000001467</p>
                <p>DONATE FOR FLOOD VICTIMS</p>
            </div>
            <div className='info_parent'>
                <div className='info'>
                    <h2>Hi there!</h2>
                    <h1>I’m Abdul Rehman</h1>
                    <h2>Deep Learning | Computer Vision | FPGA | Data Science | MERN Web Developer</h2>
                </div>
                <div className='contactBtn'>
                    <a href="https://www.facebook.com/profile.php?id=100011321892018" target="_blank">
                        <button className='linkBtn'><FaFacebookF className='Icon' /></button>
                    </a>
                    <a href="https://instagram.com/abdulrehman.faisal100?igshid=YmMyMTA2M2Y=" target="_blank">
                        <button className='linkBtn'><FaInstagram className='instaIcon' /></button>
                    </a>
                    <a href="https://twitter.com/abdulrehman1293?s=08" target="_blank">
                        <button className='linkBtn'><FaTwitter className='Icon' /></button>
                    </a>
                    <a href="https://www.linkedin.com/in/abdul-rehman-faisal-1101491b1" target="_blank">
                        <button className='linkBtn'><FaLinkedin className='Icon' /></button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;