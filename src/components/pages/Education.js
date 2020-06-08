import React from 'react';

function Experience() {

        return <div className="section section-odd" id="education">
            <h2 className="ed-title">Education</h2>
            <section className="exp-section">
            <div className="exp-heading">
                <div className="exp-employer">
                    <h3 className="position">B.S. Computer Science</h3>
                    <p className="company">California State University, East Bay</p>
                </div>
                <div className="exp-time">
                    <p className="date-range">August 2018 - May 2020</p>
                    <p className="location">3.93 Major GPA</p>
                </div>
            </div>
            <div className="exp-details">
                <p className="exp-detail"><strong>Relevant Coursework:</strong> Data Structures and Algorithms, Algorithm Analysis, Software Engineering, Web Development, Mobile (Android) Development, Artificial Intelligence, Database Architecture, Computer Architecture</p>
            </div>
        </section>
        </div>;
}

export default Experience