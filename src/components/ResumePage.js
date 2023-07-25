import React from 'react';
import '../styling/scss/ResumePage.scss';
import ResumeCard from './individual/ResumeCard';

export default function ResumePage() {
    const TADesc = "I was a teaching assistant for Intro to Computer Science I and II, Calculus II, and Software Design -- all courses taken by Computer Science students within their first and second years in the program. Some of my responsibilities included: attending lectures and helping students complete weekly worksheets, answering questions on the course forum (Piazza), curating material for and delivering tutorials, hosting office hours, and invigilating and grading midterms and final exams."
    const UberDesc = "For my third co-op workterm, I worked as a Software Engineer at Uber on the Order Platform team. The Order Platform ('OP') team is responsible for storing and acts as a source-of-truth for trip and order data and is part of Uber Engineering's core services. Created a new, optimized rider/driver trip analytics service that updates user trip analytics data (first trip time, last trip time, etc) in real-time and stores the information in a new data store. This service relieved the load placed on the existing service (and data store) by 40% and was a critical stepping stone towards its eventual deprecation. It was nothing short of an honour to work on a platform that is so widely used and within a high-impact team such as OP."
    const AdaDesc = "For my second co-op workterm, I joined Ada's Chat Experience ('ChatX') team as a Full-Stack Developer. One of the major projects I worked on was supporting right-to-left (RTL) languages in chat. I was responsible for adding automated language detection for Arabic and Hebrew, as well as modifying several existing UI components to adhere to RTL conventions when chatters are conversing in those languages. Furthermore, I worked on improving chat resiliency by adding outage pages for customers during slow connections. Working at Ada was truly amazing - Not only did I love the line of [significant] work I was assigned (and how rewarding it was to see my work being used in production!), but I was thoroughly blown away by the superb company culture."
    const KorotuDesc = "For my first co-op workterm, I worked at Korotu Technology as a Software Engineer (Full-Stack) and Artificial Intelligence Researcher Intern. Korotu's vision is to create a solution that aids landowners in protecting and repairing their land. Over the course of the summer, I was responsible for optimizing and adding additional functionality to the backend codebase, creating and styling several frontend pages, and desgining the entire UI/UX of the product. It was a wonderful time working for Korotu and I am honoured to know that my work will provide the foundation to a great product with an even greater potential for positive change!"
  
    return (
        <div className="resume">
            <h1>My Work Experience</h1>
                <div className="work">
                    <h2>Education</h2>
                    <ResumeCard 
                        companyName="University of Toronto"
                        companyLink="https://www.utoronto.ca/"
                        companyPosition="Teaching Assistant"
                        location="Toronto, Canada"
                        description={TADesc}
                        startDate="Sept. 2020"
                        endDate="Present (Recurring)"
                        tags={["Python", "C", "Java", "OOP", "Data structures", "Calculus"]}
                    />

                    <h2>Industry</h2>
                    <ResumeCard 
                        companyName="Uber"
                        companyLink="https://www.uber.com/"
                        companyPosition="Software Engineer Intern"
                        location="San Francisco, California"
                        description={UberDesc}
                        startDate="May 2022"
                        endDate="Aug. 2022"
                        tags={["Go", "gRPC", "Kafka", "Thrift"]}
                    />

                    <ResumeCard 
                        companyName="Ada Support"
                        companyLink="https://www.ada.cx/"
                        companyPosition="Full-Stack Developer Intern"
                        location="Toronto, Canada"
                        description={AdaDesc}
                        startDate="Sept. 2021"
                        endDate="Dec. 2021"
                        tags={["React.js", "Python", "Typescript", "MongoDB"]}
                    />

                    <ResumeCard 
                        companyName="Korotu Technology"
                        companyLink="https://www.korotu.com/"
                        companyPosition="Software Engineer Intern"
                        location="Toronto, Canada"
                        description={KorotuDesc}
                        startDate="May 2021"
                        endDate="Aug. 2021"
                        tags={["React.js", "Python", "Django", "Figma"]}
                    />
                </div>
            </div>
    );
}
