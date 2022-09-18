import {
  Link,
} from "react-router-dom";
import React from "react";
import Project from '../Project/Project'
import Navbar from '../NavBar/Navbar';
import Home from '../Home/Home';
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/footer'
import './Main.css';

const Main = () => {
    return (
    
    <div className="mainDiv">

        <Navbar />

        <Home />

        <About />

        <Portfolio />

        <div id="project" className="projectDiv">
            <h1  className='allHeadings'>Click here to see my projects</h1>
            <div className="underline"></div>
            <Link className="linkProject" to="/projects">Projects</Link>    
        </div>
        {/* <Router>
            <Routes>
                <Route exact path="/" component={<Main/>}></Route>
                <Route exact path="/projects" component={<Project/>}></Route>
            </Routes>
        </Router> */}
        

        <Contact/>

        <Footer />

    </div>
    );
}

export default Main;
