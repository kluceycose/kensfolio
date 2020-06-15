import React, { useEffect, useState } from 'react';
import logo1 from '../../statics/img/logo1.svg';

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
            <button onClick={()=> props.setShow("Intro")} className="nav__link">
                <img src={logo1} alt="Kenneth Lucey-Cose" className="logo"/>
            </button>
            <nav className="nav nav--visible">
                <ul className="nav__list row">
                    <li className="nav__item"><button onClick={()=> props.setShow("Home")} className="nav__link">Home</button></li>
                    <li className="nav__item"><button onClick={()=> props.setShow("Portfolio")} className="nav__link">Portfolio</button></li>
                    {/* <li className="nav__item"><button onClick={()=> props.setShow("About")} className="nav__link">Accolades</button></li> */}
                </ul>
            </nav>
        </div>
    </header>;
}

export default NavMenu;