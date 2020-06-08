import React, { useState } from 'react';
import WebFont from 'webfontloader';
import { Header, Footer } from "./components/layouts";
import { About, Banner, Intro, Portfolio } from "./components/pages";
import './components/styles/styles-background.css';
import './components/styles/styles.scss';

function App(){
    const [show, setShow] = useState("Portfolio");

    WebFont.load({
        google: {
            families: ['Roboto: 400,500,600,700,800,900', 'Comfortaa', 'Share Tech Mono']
        }
    })

    let content;
    switch(show){
        case "About":
            content = <About />;
            break;

        case "Intro":
            content = <Intro />;
            break;

        case "Portfolio":
            content = <Portfolio />;
            break;

        default:
            content = <h3>{show} isn't implemented yet.</h3>;
    }

    return <div>
        <Header setShow={setShow.bind(this)}/>
        <div class="row content container">
            <Banner />
            {content}
        </div>
        <Footer/>
    </div>;
}

export default App;