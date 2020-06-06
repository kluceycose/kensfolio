import React from 'react';
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithubSquare, FaFileAlt } from 'react-icons/fa';

function Footer(){
    return <footer class="footer">
        <div class="footer-1 footer__item">
            <p>Open to new opportunities :)</p>
        </div>
        <div class="footer-2 footer__item">
            <h4>Location</h4>
            <p>Bay Area, California</p>
        </div>
        <div class="footer-3 footer__item">
            <h4>Email</h4>    
            <p>kluceycose@gmail.com</p>
        </div>        
        <div class="footer-4 footer__item">
            <IconContext.Provider value={{size: "3em"}}>
                <a href="https://www.linkedin.com/in/kluceycose" class="footer-icon-link">
                    <FaLinkedin class="footer-4__item"/>
                </a>
                <a href="https://www.github.com/kluceycose" class="footer-icon-link">
                    <FaGithubSquare class="footer-4__item"/>
                </a>
                <a href="#" class="footer-icon-link">
                    <FaFileAlt />
                </a>
            </IconContext.Provider>
        </div>
    </footer>
}

export default Footer;