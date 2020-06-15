import React, { useState } from 'react';
import WebFont from 'webfontloader';
import { Header, Footer } from "./components/layouts";
import { Banner, Home, Portfolio } from "./components/pages";
import './components/styles/styles-background.css';
import './components/styles/styles.scss';

function App(){
    const [show, setShow] = useState("Home");

    WebFont.load({
        google: {
            families: ['Roboto: 400,500,600,700,800,900', 'Comfortaa', 'Share Tech Mono']
        }
    })

    let content;
    switch(show){
        case "Home":
            content = <Home />;
            break;

        case "Portfolio":
            content = <Portfolio />;
            break;

        default:
            content = <h3>{show} isn't implemented yet.</h3>;
    }

    return <div className="app">
        <Header setShow={setShow.bind(this)}/>
        <div class="row content">
            <Banner />
            {content}
        </div>
        <Footer/>
    </div>;
}

export default App;