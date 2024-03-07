import React from 'react'
import "./About.css"
const About = () => {
    return (
        <>
            <section className="About-section" id='about'>
                <div className="main-About">
                    <div className="about-div">
                        <h3 className="abo">About</h3>
                        <hr />
                        <p className="about-cont">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className="images-main">
                            <div className="first-img">
                                <img src="https://www.w3schools.com/w3images/team2.jpg" alt="john-img" className="images" />
                                <div className="inner">
                                <h2 >John Doe</h2>
                                <h4>CEO & Founder</h4>
                                <p className='para'>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                                <h3 className='con'>Contact</h3>
                                </div>
                            </div>
                            <div className="first-img">
                                <img src="https://www.w3schools.com/w3images/team1.jpg" alt="john-img" className="images" />
                                <div className="inner">
                                    <h2 >Jane Doe</h2>
                                    <h4>Architect</h4>
                                    <p className='para'>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                                    <h3 className='con'>Contact</h3>
                                </div>
                            </div>
                            <div className="first-img">
                                <img src="https://www.w3schools.com/w3images/team3.jpg" alt="john-img" className="images" />
                                <div className="inner">
                                    <h2 >Mike Ross</h2>
                                    <h4>Architect</h4>
                                    <p className='para'>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                                    <h3 className='con'>Contact</h3>
                                </div>
                            </div>
                            <div className="first-img">
                                <img src="https://www.w3schools.com/w3images/team4.jpg" alt="john-img" className="images" />
                                <div className="inner">
                                    <h2 >Dan Star</h2>
                                    <h4>Architect</h4>
                                    <p className='para'>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                                    <h3 className='con'>Contact</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </section>
        </>
    )
}

export default About
