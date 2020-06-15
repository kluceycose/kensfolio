import React from 'react';

function Experience() {

    return <div className="section section-even" id="experience">
        <div className="container">
            <h2 className="exp-title">Experience</h2>
            <section className="exp-section">
                <div className="exp-heading">
                    <div className="exp-employer">
                        <h3 className="position">Web Developer</h3>
                        <p className="company">UC Hastings College of the Law</p>
                    </div>
                    <div className="exp-time">
                        <p className="date-range">November 2019 - April 2020</p>
                        <p className="location">San Francisco, CA</p>
                    </div>
                </div>
                <div className="exp-details">
                    <ul className="exp-details__list">
                        <li className="exp-details__item">In charge of full development of tools to automate data analysis of pharmaceutical data, from requirements gathering to implementation using JavaScript</li>
                        <li className="exp-details__item">Designed and developed content within EduBlogs restrictions, requiring creative solutions and workarounds</li>
                        <li className="exp-details__item">Updated and debugged tools written in R to work with new data</li>
                    </ul>
                </div>
            </section>
    
            <section className="exp-section">
                <div className="exp-heading">
                    <div className="exp-employer">
                        <h3 className="position">IT Intern</h3>
                        <p className="company">San Mateo County Transit District</p>
                    </div>
                    <div className="exp-time">
                        <p className="date-range">June 2019 - August 2019</p>
                        <p className="location">San Carlos, CA</p>
                    </div>
                </div>
                <div className="exp-details">
                    <ul className="exp-details__list">
                        <li className="exp-details__item">Answered HelpDesk tickets for internal employees across multiple sites</li>
                        <li className="exp-details__item">Researched and implemented solutions using PowerShell and CLI Scripts to remove Win10 image bloatware from MDT installations, saving dozens of hours of ongoing labor spent manually removing it</li>
                        <li className="exp-details__item">Created, tested, documented, and implemented a plan to migrate wireless printers from wireless connections to wired connections with minimal user impact</li>
                    </ul>
                </div>
            </section>
    
            <section className="exp-section">
                <div className="exp-heading">
                    <div className="exp-employer">
                        <h3 className="position">Vehicle Test Ops Technician</h3>
                        <p className="company">Lockheed Martin Space Systems Company</p>
                    </div>
                    <div className="exp-time">
                        <p className="date-range">January 2009 - August 2018</p>
                        <p className="location">Sunnyvale, CA</p>
                    </div>
                </div>
                <div className="exp-details">
                    <ul className="exp-details__list">
                        <li className="exp-details__item">Worked as part of a new team on a major spacecraft component that reduced the number of manufacturing discrepancies from 360 on the previous build to 10, saving the customer considerable money and delivering the component early</li>
                        <li className="exp-details__item">Integral part of the team on Engineering and Quality builds of LM’s first Multi-Mission Solar Array Deployer to determine engineering and manufacturing changes needed for future successful builds</li>
                        <li className="exp-details__item">Escorted Spacecraft Core across country, requiring 24x7 monitoring</li>
                        <li className="exp-details__item">Volunteered frequently for difficult tasks, resulting in successful completion of critical operations such as the integration of Flight hardware using overheard cranes, precise mixing of chemicals and epoxies, and repairs in hard-to-reach areas</li>
                    </ul>
                </div>
            </section>
        </div>
    </div>;
}

export default Experience;