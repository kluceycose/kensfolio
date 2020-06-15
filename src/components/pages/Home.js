import React from "react";
import books_img from "../../statics/img/about/books_img.jpg";
import climbing from "../../statics/img/about/climbing-cropped.jpg";
import grand_canyon from "../../statics/img/about/grand_canyon.jpg";

function Home(){

    return <section className="" id="about">
        <section className="section section-even">
            <article className="intro row container">
                <h2 className="intro__title">Intro</h2>
                <div className="intro-content row">
                    <p className="intro__text">Recent BS Computer Science graduate with a passion for ongoing learning</p>
                    <p className="intro__text">I am excited to develop for any platform utilizing my experience in Java, JavaScript, Kotlin, SQL, and many other languages.</p>
                    <p className="intro__text">I enjoy working with Full Stack (MERN, Java) and Mobile (Android) technologies, and have a deep interest in Machine Learning</p>
                </div>
            </article>
        </section>
        <section class="section section-odd">
            <article className="about container">
                <h2 className="about__title">A Little About Me</h2>
                <article class="fun-facts grid">
                    <div className="fact-card">
                        <h3 className="fact_title">Avid Learner</h3>
                        <hr/>
                        <img className="fact_img" src={books_img} alt="A generic stack of books, with the top book open."/>
                        <p className="fact_text">Much of my spare time at home is spent reading and learning. Whether it's coding best practices, achieving one's goals, finding balance, financial strategies, or even just something for pleasure, there's always something more to read and learn!</p>
                    </div>
                    <div className="fact-card">
                        <h3 className="fact_title">Indoor Climber</h3>
                        <hr/>
                        <p className="fact_text">I had my first experience with rock climbing at a summer camp in middle school, and have had a lifelong love for the sport ever since. I like to pit myself against 5.11a's and -b's on top-rope climbs, and test my strength and flexibility on overhanging boulder climbs. It's a lot of fun!</p>
                        <img className="fact_img" src={climbing} alt="Kenneth climbing an indoor rock wall, about to pass an overhang."/>
                    </div>
                    <div className="fact-card">
                        <h3 className="fact_title">Outdoor Adventurer</h3>
                        <hr/>
                        <img className="fact_img" src={grand_canyon} alt="Kenneth standing on a rock overlooking the Grand Canyon."/>
                        <p className="fact_text">I love being outdoors. A cool breeze, a warm sun, a stunning view, and a nice hike to get the blood flowing is a recipe for a great day! Last year I finally made it to the Grand Canyon, which was my greatest outdoor adventure yet!</p>
                    </div>
                </article>
            </article>
        </section>
        
    </section>;
}

export default Home;