import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Us</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>I am a Electronics and Communication grad student from SDMIT Ujire.
                                                                        </p>

                                            <p>Aim to achieve a challenging & successful career, where I can make a
                                                 significant contribution using my innovative ideas,
                                                 knowledge, skills and experience with the objective of development & growth of the organization</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                        <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>Software Development Life Cycle</h3>
                                        <p>
                                            Having Around 2.3 years of professional experience in Software Development Life Cycle(SDLC),
                                             which includes Analysis, Application Programming, Implementation,
                                            development using JavaScript (Typescript,Node Js), Bootstrap 4.
                                        </p>
                                        Experience in creating self contained, reusable and testable modules and components.
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>Web Development</h3>
                                        <p>I have experience building websites and chrome extentions using JavaScript,React,Angular,HTML,CSS. Experience with general user experience concepts and the ability to design highly effective user interface.</p>
                                        <p>Good understanding of overall web design including basic usability, accessibility, industry standards, architecture and navigation.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-phone3" />
                                    </span>
                                    <div className="desc">
                                        <h3>Data Structures & Algorithms</h3>
                                        <p>As coming from the ECE background, still I have good grasp over
                                            fundamental concepts of DSA.
                                            Well experienced in writing test cases in Test Driven Development and Behavior Driven Development.
                                            </p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
