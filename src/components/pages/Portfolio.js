import React from 'react';
import { Experience, Projects, Skills } from "./";

function Portfolio() {

    return <div className="">
        <div className="section section-first section-even">
            <h2 className="folio-title">Portfolio</h2>
        </div>
        <Skills />
        <Projects />
        <Experience />
        
    </div>;
}

export default Portfolio;