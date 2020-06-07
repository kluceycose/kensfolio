import React, { useEffect, useState } from 'react';
import logo1 from './img/logo1.svg';
import './styles/styles-header.css';

function NavMenu(props){

    const [vis, setVis] = useState(false);

    useEffect (() => {
        const nav = document.querySelector('.nav');
        nav.classList.toggle('nav--visible');
    });

    return <header>
        <div className="container row">
            <button className="nav-toggle" aria-label="open navigation" onClick={() => setVis(!vis)}>
                <span className="hamburger"></span>
            </button>
            <a href="#" onClick={()=> props.setShow("Home")} className="nav__link">
                <img src={logo1} alt="Kenneth Lucey-Cose" className="logo nav__link"/>
            </a>
            <nav className="nav nav--visible">
                <ul className="nav__list row">
                    <li className="nav__item"><a onClick={()=> props.setShow("Home")} className="nav__link">Home</a></li>
                    <li className="nav__item"><a onClick={()=> props.setShow("Resume")} className="nav__link">Resume</a></li>
                    <li className="nav__item"><a onClick={()=> props.setShow("Portfolio")} className="nav__link">Portfolio</a></li>
                    <li className="nav__item"><a onClick={()=> props.setShow("Resume")} className="nav__link">About</a></li>
                    <li className="nav__item"><a onClick={()=> props.setShow("Contact")} className="nav__link">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>;
}

export default NavMenu;