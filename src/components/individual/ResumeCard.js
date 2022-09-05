import React from 'react';
import '../../styling/scss/ResumeCard.scss';

export default function ResumeCard(props) {
    const { companyName, companyLink, companyPosition, description, location, startDate, endDate, tags } = props;

    const listTags = tags.map((tag) =>
        <div className="tag">
            {tag}
        </div>
    );
    
    return (
        <>
            <div className="card">
                <div className="card_details">
                    <div className="company">
                        <div className="company_position">
                            {companyPosition}
                        </div>
                        <a className="company_name" href={companyLink}>
                            {companyName}
                        </a>
                    </div>
                    <div className="info">
                        <div className="position_location">
                            {location}
                        </div>
                        <div className="position_time">
                            {startDate} - {endDate}
                        </div>
                    </div>
                </div>
            
                <div className="card_body">
                    <div className="job_description">
                        {description}
                    </div>
                    <div className="tags">
                        {listTags}
                    </div>
                </div>
            </div>
        </>  
    );
}