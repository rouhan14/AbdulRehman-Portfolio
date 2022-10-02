import React from "react";
import { useState } from "react";
import { IoMdDownload } from 'react-icons/io'
import {ProjectData} from '../Data/ProjectData'
// import cert from "../Assets/";
import './Project.css'



const Project = () => {
    return(
        <div id="project" className="mainProject">

            <h1 className='allHeadings'>Projects</h1>
            <div className="underline"></div>
            
            <div className="projectsDiv">
                {ProjectData.map((element) => {
                    return(
                        <SingleProject key={element.id} {...element} />
                        // <div className="project_box ">
                        //     <div className="imgDiv">
                        //         <div className="projectImage"></div>
                        //     </div>
                        //     <div className="dataDiv">
                        //         <h4>{element.heading}</h4>
                        //         {
                        //             readMore?<div className="description">
                        //             <p>{element.b1}</p>
                        //             <p>{element.b2}</p>
                        //             <p>{element.b3}</p>
                        //             <p>{element.b4}</p>
                        //             <p>{element.b5}</p>
                        //             <p>{element.b6}</p>
                        //             <p>{element.b7}</p>
                        //             <p>{element.b8}</p>
                        //             <p>{element.b9}</p>
                        //         </div>:null
                        //         }
                                
                                
                        //         <p style={readMore==element.id?normal:hidden}>{element.b1}<br></br>{element.b2}<br></br>{element.b3}<br></br>{element.b4}<br></br>{element.b5}<br></br>{element.b6}<br></br>{element.b7}<br></br>{element.b8}<br></br>{element.b9}</p>
                        //         <button className="btn" onClick={() => {
                        //             if (readMore === element.id ) {
                        //                 setReadMore('')
                        //             }else{
                        //             setReadMore(element.id)}}
                        //             }>Show/Hide</button>
                        //     </div>
                        // </div>
                    );
                })}
            </div>

        </div>
    );
}

const SingleProject = ({id, heading, date, img, b1, b2, b3, b4, b5, b6, b7, b8, b9}) => {
    const [readMore, setReadMore] = useState(false)
    const [btnText, setBtnText] = useState('Show More')
    return(
        <div className="project_box ">
            <div className="imgDiv">
                <div className="projectImage" style={{backgroundImage: `url(${img})`}}></div>
                {/* <img src={img} alt="" /> */}
            </div>
            <div className="dataDiv">
                <h4>{heading}</h4>
                {
                    readMore?<div className="description">
                    <p>{b1}</p>
                    <p>{b2}</p>
                    <p>{b3}</p>
                    <p>{b4}</p>
                    <p>{b5}</p>
                    <p>{b6}</p>
                    <p>{b7}</p>
                    <p>{b8}</p>
                    <p>{b9}</p>
                </div>:null
                }
                <button className="btn" onClick={() => {
                    if(readMore===false){
                        setBtnText('Hide')
                        setReadMore(true)
                    }else{
                        setBtnText('Show More')
                        setReadMore(false)
                    }
                }}>{btnText}</button>
            </div>
            
        </div>
    );
}

export default Project;