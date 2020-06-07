import React from 'react';
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithubSquare, FaFileAlt } from 'react-icons/fa';
import './styles/styles-footer.css';

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
            <h4>Email</h4>    
            <p>kluceycose@gmail.com</p>
        </div>        
        <div className="footer-4 footer__item">
            <IconContext.Provider value={{size: "3em"}}>
                <a href="https://www.linkedin.com/in/kluceycose" className="footer-icon-link">
                    <FaLinkedin className="footer-4__item"/>
                </a>
                <a href="https://www.github.com/kluceycose" className="footer-icon-link">
                    <FaGithubSquare className="footer-4__item"/>
                </a>
                <a href="https://drive.google.com/file/d/1oWmW6b938_0jvvgnOJtN-7sof2zTqsXn/view?usp=sharing" className="footer-icon-link">
                    <FaFileAlt />
                </a>
            </IconContext.Provider>
        </div>
    </footer>
}

export default Footer;