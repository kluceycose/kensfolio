import React, { useState } from 'react';
import WebFont from 'webfontloader';
// import About from "./About.js";
// import Contact from "./Contact.js"
import Footer from "./Footer.js";
import Home from "./pages/Home.js";
import Header from "./Header.js";
// import Portfolio from "./Portfolio.js";
// import Resume from "./Resume.js";
import './styles/styles-general.css';
import './styles/styles-background.css';

function App(){
    const [show, setShow] = useState("Home");

    WebFont.load({
        google: {
            families: ['Roboto: 400,900', 'Playfair Display: 500,900']
        }
    })

    let content;
    switch(show){
        // case "About":
        //     content = <About />;
        //     break;
        
        // case "Contact":
        //     content = <Contact />;
        //     break;

        case "Home":
            content = <Home />;
            break;

        // case "Portfolio":
        //     content = <Portfolio />;
        //     break;
        
        // case "Resume":
        //     content = <Resume />;
        //     break;

        default:
            content = <h3>{show} isn't implemented yet.</h3>;
    }

    return <div>
        <Header setShow={setShow.bind(this)}/>
        {content}
        <Footer/>
    </div>;
}

export default App;