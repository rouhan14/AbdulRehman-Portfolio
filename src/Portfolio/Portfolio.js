import React from "react";
import './Portfolio.css'
import { EducationData } from '../Data/Education'
import { TechnicalData } from "../Data/Technical";
import { CertificateData } from "../Data/Certifications";



const Portfolio = () => {
   return(
    <div id='education' className="portfolio">
        <div className="Edu_parent"  data-aos="fade-left">
            <h1 className='allHeadings'>Portfolio</h1>
            <div className="underline"></div>
            <p className="oneLiner">Take a look below, I hope you may find something that interests you 😊</p>
            <div className="box_grid">
            {/* {PortfolioData.map((item)=>{
            return(
                <article className="box">
                    {item.icon}
                    <h2 className="heading">{item.heading}</h2>
                    <p className="desciption">{item.description}</p>
                </article>
            )
        })} */}
        {
            EducationData.map( (item) => {
                return(
                    <div>
                        <input type='checkbox' id="btnControl" className="container" />
                            <label htmlFor='btnControl' className="box">
                                {/* <div className="cont">masdkldpoaskd</div> */}
                                {item.icon}
                                <h2 className="heading">{item.heading}</h2>
                                <div className="content">
                                    <p className="desciption">{item.description}</p>
                                    <br />
                                    <p className="para">{item.university}</p>
                                    <p className="para">{item.program}</p>
                                    <p className="para">{item.gpa}</p>
                                    <br />
                                    <p className="para">{item.school}</p>
                                    <p className="para">{item.alevel}</p>
                                    <p className="para">{item.grades}</p>
                                    <p className="para">{item.sat}</p>
                                </div>
                            </label>
                    </div>
                    );
            })
        }
        {
            TechnicalData.map( (item) => {
                return(
                    <div>
                        <input type='checkbox' id="techDataControl" className="container" />
                            <label htmlFor='techDataControl' className="box">
                            {item.icon}
                            <h2 className="heading">{item.heading}</h2>
                            <div className="content">
                                <p className="desciption">{item.description}</p>
                                <p>{item.intern1}</p>
                                <ul>
                                    <li>{item.b1}</li>
                                    <li>{item.b2}</li>
                                    <li>{item.b3}</li>
                                    <li>{item.b4}</li>
                                </ul>
                                <p>{item.intern2}</p>
                                <ul>
                                    <li>{item.b11}</li>
                                    <li>{item.b22}</li>
                                    <li>{item.b33}</li>
                                </ul>
                                <p>{item.photo}</p>
                                <ul>
                                    <li>{item.b111}</li>
                                    <li>{item.b222}</li>
                                </ul>
                            </div>
                        </label>
                    </div>
                );
            })
        }
        </div>

        </div>
        <h1 className='allHeadings'>Certifications</h1>
        <div className="underline"></div>
        <div className="cert_grid">
            {CertificateData.map((element) => {
                return(
                    <SingleCertificate key={element.id} {...element} />
                    // <a href="https://www.linkedin.com/in/abdul-rehman-faisal-1101491b1" target="_blank">
                    //     <button class="linkBtn"><FaLinkedin className='Icon' /></button>
                    // </a>
                    // <a href={element.cred} className="certificate" target="_blank" style={{backgroundImage: `url(${element.img})`}}>
                    // <a href={element.cred} className="certificate" target="_blank">
                    //     <p className="cert_name">{element.cert}</p>
                    //     <p className="cert_site">{element.site}</p>
                    //     <p className="cert_intruc">{element.instruc}</p>
                    //     <div className="cert_img" tyle={{backgroundImage: `url(${element.img})`}}></div>
                    // </a>                                        
                );
                })
            }
        </div>
    </div>
    );
}

const SingleCertificate = ({cert, site, instruc, cred, img}) => {
    return(
        <a href={cred} className="certificate" target="_blank" style={{backgroundImage: `url(${img})`}}>
            <p className="cert_name">{cert}</p>
            <p className="cert_site">{site}</p>
            <p className="cert_intruc">{instruc}</p>
            {/* <div className="cert_img" style={{backgroundImage: `url(${img})`}}></div> */}
        </a>
    );
}

export default Portfolio;