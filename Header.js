import React from 'react';
import logo1 from './img/logo1.svg';

function NavMenu(props){
    return <header>
        <div class="container row">
            <button class="nav-toggle" aria-label="open navigation">
                <span class="hamburger"></span>
            </button>
            <a onClick={()=> props.setShow("Home")} class="nav__link">
                <img src={logo1} alt="Kenneth Lucey-Cose" class="logo"/>
            </a>
            <nav class="nav">
                <ul class="nav__list row">
                    <li class="nav__item"><a onClick={()=> props.setShow("Home")} class="nav__link">Home</a></li>
                    <li class="nav__item"><a onClick={()=> props.setShow("Resume")} class="nav__link">Resume</a></li>
                    <li class="nav__item"><a onClick={()=> props.setShow("Portfolio")} class="nav__link">Portfolio</a></li>
                    <li class="nav__item"><a onClick={()=> props.setShow("Resume")} class="nav__link">About</a></li>
                    <li class="nav__item"><a onClick={()=> props.setShow("Contact")} class="nav__link">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>;
}

export default NavMenu;