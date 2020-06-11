import React from 'react';
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithubSquare, FaFileAlt } from 'react-icons/fa';

function Footer(){
    return <footer className="footer">
        <div className="footer-1 footer__item">
            <p>Open to new opportunities :)</p>
        </div>
        <div className="footer-2 footer__item">
            <h4>Location</h4>
            <p>Bay Area, California</p>
        </div>
        <div className="footer-3 footer__item">
            <h4>Contact Information</h4>    
            <p>Please see my resume</p>
        </div>        
        <div className="footer-4 footer__item">
            <IconContext.Provider value={{size: "3em"}}>
                <a href="https://www.linkedin.com/in/kluceycose" className="footer-icon-link" target="_blank">
                    <FaLinkedin className="footer-4__item"/>
                </a>
                <a href="https://www.github.com/kluceycose" className="footer-icon-link" target="_blank">
                    <FaGithubSquare className="footer-4__item"/>
                </a>
                <a href="https://drive.google.com/file/d/1NN5HUtPPQOgaYK8hSA-526znr3yd29Xa/view?usp=sharing" className="footer-icon-link" target="_blank">
                    <FaFileAlt />
                </a>
            </IconContext.Provider>
        </div>
    </footer>
}

export default Footer;