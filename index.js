import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import About from "./About.js";
// import Contact from "./Contact.js"
import Footer from "./Footer.js";
import Home from "./Home.js";
import Header from "./Header.js";
// import Portfolio from "./Portfolio.js";
// import Resume from "./Resume.js";


function App(){
    const [show, setShow] = useState("Home");

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

ReactDOM.render(<App/>, document.getElementById("root"));