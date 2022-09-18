import React, { useState, useEffect } from 'react';
import '../NavBar/Navbar.css'


const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 55){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    return(
        <div className={navbar ? 'bar' : 'navbar'}>
            <div className='navbarName'>
                <p>Abdul Rehman Faisal</p>
            </div>
            <div className='flexDiv'>
                <div className='navbarButtons'>
                <a href="#home" className='navbarBtn'>HOME</a>
                <a href="#about" className='navbarBtn'>ABOUT</a>
                <a href="#education" className='navbarBtn'>PORTFOLIO</a>
                <a href="#project" className='navbarBtn'>PROJECTS</a>
                <a href="#contact" className='navbarBtn'>CONTACT</a>
            </div>
            </div>
            
        </div>
    );
}


export default Navbar;