import './App.css';
// import {BrowserRouter as Router, Route, Link, Switch, Routes} from 'react-router-dom'
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Main  from "./Main/Main";
import Project from './Project/Project'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..
AOS.init({
  offset: 220
});
function App() {
  return (
    <div className="app">
        <Router>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                {/* <Route index component={<Main/>}></Route> */}
                <Route path="projects" element={<Project />}></Route>
                <Route path="*" element={<Project />}></Route>
            </Routes>
        </Router>
        </div>
  );
}

export default App;
