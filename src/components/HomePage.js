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
                        Thank you for visiting my website! I received an Honours Bachelor of Science in Computer Science from The University of Toronto and am an incoming Software Engineer at Uber.
                        I am a lover of tech, cats, reading, and travelling! I am interested in full-stack development, safety &amp; security, 
                        big data, as well as the social impacts of software. When I am not working or studying, you can find me drinking my third iced coffee of the day, playing with my cat, or reading a good book.
                    </p>
                    <p className="biography__second-paragraph">
                        You can always reach out to me for a coffee chat via <a className="home-links" href="mailto:y9rdwn0110@gmail.com">Gmail</a> or <a className="home-links" href="https://www.linkedin.com/in/yara-radwan/">LinkedIn</a>.
                    </p>
                    <p className="biography__third-paragraph">
                        Check out the rest of my website by clicking the links on the right <span className="right-arrow">→</span><br/><br/>
                        Enjoy your stay! 🦋
                    </p>
                </div>
            </div>
            <div className="userlinks">
                <div className="resume-file">
                    <a className="resume-link" href="https://drive.google.com/file/d/1kXLT5WddK7St77G_sMHrXpMI4xViM61w/view">click to view my resume</a>
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
