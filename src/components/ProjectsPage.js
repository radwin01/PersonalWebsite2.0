import React from 'react';
import '../styling/scss/ProjectPage.scss';
import ProjectCard from './individual/ProjectCard';

// project image imports
import fs2021 from './../media/images/elle_hacks.png';
import pb from './../media/images/party_bot.png';
import sc from './../media/images/sportcred.png';
import ms from './../media/images/mock_shell.png';
import tg from './../media/images/translation_game.png';

export default function ProjectsPage() {
    const fDesc = "Welcome to Finance Simulator 2021. Once you enter, you will start off as a 16 year-old with a few dollars in savings. You will be given age-appropriate scenarios that will require you to make financially concious decisions which affect your annual income, expenses, and savings. Once the simulation is complete, you will receive your final results and *hopefully* be inspired to take control of your financial situation! Made for ElleHacks 2021, I worked on this product as part of a team and was in charge of front and back-end development. This was my very first hackathon, and I could not be more satisfied with the experience! Not only did I make new friends, but my team won the Rogers Custom Award for having the most innovative product! 💳"
    const sDesc = "SPORTCRED is a web-app created as part of a team project for CSCC01. I specifically worked on several frontend pages for the web-app as well as UI/UX. This interactive app used React for frontend, Java for backend, and Neo4j as a graph database. Users can create an account, test their knowledge by playing some head-to-head trivia, participate in debates, check out latest game information to increase their analyst credibility score. This project was one of the highlights of my second year in postsecondary education, and the product owners were very pleased with the final product! 🏆"
    const cDesc = "Caffeinate is an organizational and journaling application, intended to act as a one-stop sanctuary for a user. Users can sign up, sign in and sign out seamlessly via Google (gmail). Once signed in/up to Caffeinate, users can write entries in their own personalized journal, take daily surveys to assess how their day is going, and organize their tasks using a virtual agenda. They can also view various analytics and trends in their journal and survey responses. A user's survey sentiment also contributes towards the growth of their own virtual tree, which grows the more positive survey entries are completed. In this team project, I was responsible for implementing the entire frontend (including the UI/UX) and worked on the backend as well. This is by far my favourite project, especially since it allowed me to use my skills as a developer to create a plaform that can better other people's lives. ☕"
    const tDesc = "I created this French-English game when I still a wee coder! This game was created with Java and GUI components. Test your French interpreter skills by writing the correct translation to the fruits that appear on your screen! This project was what inspired me to pursue a career in Computer Science, and I have never looked back since! 🤓"
    const pDesc = "My PartyBot is an exciting addition to any discord server! PartyBot currently allows you to play three fun-filled minigames against item, such as Rock Paper Scissors and a speed game of Twenty One. PartyBot also saves your points earned/lost in the mini games and displays it on a leaderboard to show off to your fellow server members! 🥳"
    const mDesc = "This bash shell is created as part of a team project for CSCB07. I was responsible for implementing the functionality for several commands, such as cat, curl, ls, man, exit. Created with Java, this shell replicate the shell all of us computer scientists use daily! Use your favourite commands to build your very own filesystem from scratch! This project allowed me to apply SOLID principles, scrum principles, and many of the design patterns that were taught in the course for the very first time in a project setting. 🪐"

    return (
        <div className="projects">
            <h1>My Project Gallery</h1>
            <div className="gallery">
                <ProjectCard 
                    description={cDesc}
                    githubLink="https://github.com/radwin01/caffeinate"
                    projectTitle="caffeinate"
                    youtubeLink="https://www.youtube.com/embed/4CSzuH5X3oY"
                />

                <ProjectCard 
                    description={fDesc}
                    githubLink="https://github.com/radwin01/ellehacks2021"
                    imagePath={fs2021}
                    imageAlt="Finance Simulator 2021"
                    projectTitle="Finance Simulator 2021"
                    youtubeLink=""
                />

                <ProjectCard 
                    description={pDesc}
                    githubLink="https://github.com/radwin01/ellehacks2021"
                    imagePath={pb}
                    imageAlt="PartyBot"
                    projectTitle="PartyBot"
                    youtubeLink=""
                />

                <ProjectCard 
                    description={sDesc}
                    githubLink="https://github.com/radwin01/SPORTCRED"
                    imagePath={sc}
                    imageAlt="SPORTCRED"
                    projectTitle="SPORTCRED"
                    youtubeLink=""
                />

                <ProjectCard 
                    description={mDesc}
                    githubLink="https://github.com/radwin01/ellehacks2021"
                    imagePath={ms}
                    imageAlt="Mock Bash Shell"
                    projectTitle="Mock Bash Shell"
                    youtubeLink=""
                />

                <ProjectCard 
                    description={tDesc}
                    githubLink="https://github.com/radwin01/TranslationGame"
                    imagePath={tg}
                    imageAlt="Translation Game"
                    projectTitle="Translation Game"
                    youtubeLink=""
                />

            </div>
            
        </div>
    )
}