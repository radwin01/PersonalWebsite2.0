import React from 'react';
import '../../styling/scss/ProjectCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'

export default function ProjectCard(props) {
    const { description, githubLink, imagePath, imageAlt, projectTitle, youtubeLink } = props;
    
    return (
        <>
            <div className="project">
                {youtubeLink ? 
                    <div>
                        <iframe className="youtube" src={youtubeLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                : ''}

                {imagePath ? 
                    <div>
                        <img class="project-image" src={imagePath} alt={imageAlt}/>
                    </div>
                : ''}
            

                <div className="project-details">
                    <div className="project-title">
                        <h2 className='title'>{projectTitle}</h2>
                    </div>

                    <div className="project-description">
                        <p className='description'>{description}</p>
                    </div>

                    <div className="project-github">
                        <a href={githubLink}>
                            <FontAwesomeIcon className="project-icon" icon={faSquareGithub}/>
                        </a>
                    </div>
                </div>
            </div>
        </>  
    );
}