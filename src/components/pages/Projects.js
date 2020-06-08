import React from 'react';

function Projects() {

    return <div className="section-even section" id="project">
        <div className="folio-section">
            <h2 className="folio__title">Projects</h2>
            <div className="folio-section-row">
                <div className="folio-group project-group">
                    <h3 className="folio-group__title">eZoo</h3>
                    <ul className="folio-list project">
                        <li className="folio-item">Simulated zoo management website built with Java</li>
                        <li className="folio-item">Written first using Java Servlets, PostgreSQL, and JSPs</li>
                        <li className="folio-item">Later converted to use Spring MVC and Hibernate ORM</li>
                    </ul>
                </div>
                <div className="folio-group project-group">
                    <h3 className="folio-group__title">Criminal Intent</h3>
                    <ul className="folio-list project">
                        <li className="folio-item">Android app written in Kotlin</li>
                        <li className="folio-item">Allows users to capture and report "office crimes"</li>
                        <li className="folio-item">Makes use of Fragments, Room, RecyclerView, MVVM design, and Implicit Intents</li>
                    </ul>
                </div>
                <div className="folio-group project-group">
                    <h3 className="folio-group__title">Hack Your Own (Start 6/1/20)</h3>
                    <ul className="folio-list project">
                        <li className="folio-item">Gather in small groups to learn and practice MERN Full-Stack development</li>
                        <li className="folio-item">MERN: MongoDB, Express, React, Node.js</li>
                        <li className="folio-item">Follow The Odin Project, performing all development in Linux (Ubuntu) environment</li>
                    </ul>
                </div>
                <div className="folio-group project-group">
                    <h3 className="folio-group__title">This Website!</h3>
                    <ul className="folio-list project">
                        <li className="folio-item">Built from the ground up with React and SASS</li>
                        <li className="folio-item">node: react, react-dom, react-icons, gh-pages</li>
                        <li className="folio-item">Please note I am a developer, not a designer!</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>;
}

export default Projects;