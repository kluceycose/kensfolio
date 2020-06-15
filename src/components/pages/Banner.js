import React from 'react';
import image_iced_tea from '../../statics/img/about/iced_tea-cropped.jpg';

function Banner() {

    return <div className="section banner" id="banner">
        <div className="banner__content container banner__grid">
            <div className="banner__grid-1">
                <h1 className="banner-name">Kenneth<br/>Lucey-Cose</h1>
                <p className="banner-text">Full Stack | Android | Software Engineer</p>
            </div>
            <div></div>
            <div className="banner__grid-3">
                <img className="banner__img" src={image_iced_tea} alt="Kenneth Lucey-Cose enjoying some iced tea at a Greek restaurant"/>
            </div>
        </div>
    </div>;
}

export default Banner;