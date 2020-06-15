import React from 'react';

function Skills() {

    return <div className="section-odd section" id="project">
        <div className="folio-section container">
            <h2 className="folio__title">Skills</h2>
            <div className="folio-section-row">
                <div className="folio-group">
                    <h3 className="folio-group__title">Languages</h3>
                    <ul className="folio-list">
                        <li className="folio-item">Java</li>
                        <li className="folio-item">JavaScript</li>
                        <li className="folio-item">Kotlin</li>
                        <li className="folio-item">Python</li>
                        <li className="folio-item">SQL</li>
                        <li className="folio-item">R</li>
                        <li className="folio-item">LISP</li>
                        <li className="folio-item">Prolog</li>
                    </ul>
                </div>
                <div className="folio-group">
                    <h3 className="folio-group__title">Full Stack</h3>
                    <ul className="folio-list">
                        <li className="folio-item">JSP</li>
                        <li className="folio-item">Spring MVC</li>
                        <li className="folio-item">Hibernate ORM</li>
                        <li className="folio-item">MongoDB</li>
                        <li className="folio-item">Express</li>
                        <li className="folio-item">React</li>
                        <li className="folio-item">Node</li>
                    </ul>
                </div>
                <div className="folio-group">
                    <h3 className="folio-group__title">Mobile</h3>
                    <ul className="folio-list">
                    <li className="folio-item">Android Studio</li>
                    <li className="folio-item">Fragments</li>
                    <li className="folio-item">RecyclerView</li>
                    <li className="folio-item">Room</li>
                    <li className="folio-item">Model-View-ViewModel</li>
                    <li className="folio-item">Explicit and Implicit Intents</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>;
}

export default Skills;