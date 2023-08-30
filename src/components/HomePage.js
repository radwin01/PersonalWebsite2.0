import React from 'react';
import '../styling/scss/HomePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function HomePage() {
    return (
        <>
            <div className="HomePage">
                <div className="intro">
                    Hi, I’m Yara!
                </div>

                <div className="biography">
                    <p className="biography__first-paragraph">
                        I recently graduated from the Computer Science Co-op program at the University of Toronto.<br/>
                        I love music, food, coffee, cats, reading, and makeup! I am interested in full-stack development, safety &amp; security, 
                        web3, as well as the social impacts of software. When I am not working or studying, you can find me outside exploring nature, at a café drinking an iced coffee, or simply at home annoying my cat.
                    </p>
                    <p className="biography__second-paragraph">
                        I love to talk about everything and anything! You can always reach to me for a coffee chat via <a className="home-links" href="mailto:y9rdwn0110@gmail.com">Gmail</a> or <a className="home-links" href="https://www.linkedin.com/in/yara-radwan/">LinkedIn</a>.
                    </p>
                    <p className="biography__third-paragraph">
                        Check out the rest of my website by clicking the links on the right <span className="right-arrow">→</span><br/><br/>
                        Enjoy your stay! 🌻
                    </p>
                </div>
            </div>
            <div className="userlinks">
                <div className="resume-file">
                    <a className="resume-link" href="https://drive.google.com/file/d/1bGg05Lwged-p74leBybZrAP4FYtqw3IJ/view">click to view my resume</a>
                </div>
                
                <div className="endlinks">
                    <a href="https://github.com/radwin01">
                        <span className="github">
                            <FontAwesomeIcon className="icon" icon={faGithub}/>
                        </span>
                    </a>

                    <a href="https://www.linkedin.com/in/yara-radwan/">
                        <span className="linkedin">
                            <FontAwesomeIcon className="icon" icon={faLinkedin}/>
                        </span>
                    </a>

                    <a href="mailto:y9rdwn0110@gmail.com">
                        <span className="mail">
                            <FontAwesomeIcon className="icon" icon={faEnvelope}/>
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
};
