import React, { useState } from 'react';
import '../NavBar/Navbar.css'


const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [ham, setHam] = useState('hamburger is-active');

    // const toggle = () => {
    //     if(ham === 'hamburger'){
    //         setHam('hamburger is-active')
    //     }
    //     if(ham === 'hamburger is-active'){
    //         setHam('hamburger')
    //     }
    // }

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
        // <nav>
        //     <div className='container'>
        //         <h1>Abdul Rehman Fasial</h1>

        //         <div className="menu">
        //             <a href="#home" className='is-active'>Home</a>
        //             <a href="#about">About</a>
        //             <a href="#education">Portfolio</a>
        //             <a href="#project">Projects</a>
        //             <a href="#contact">Contacts</a>
        //         </div>
        //         <button className={ham} onClick={toggle}>
        //             <span></span>
        //             <span></span>
        //             <span></span>
        //         </button>
        //     </div>
        // </nav>
    );
}


export default Navbar;