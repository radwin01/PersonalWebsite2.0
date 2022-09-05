import '../styling/JournalPage.css';
import { useState, useEffect } from "react";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React from 'react';

export default function GalleryPage() {
    const [idx, setIDX] = useState(0)

    const changeJournal = (direction) => {
        if (direction) {
            setIDX(idx => idx - 1);
        } else {
            setIDX(idx => idx + 1);
        }
    }

    return (
        <div className="projects">
            {idx + 1 < count ? <div className="previous" onClick={() => changeJournal(0)}> <NavigateBeforeIcon style={{ fontSize: 80 }}/></div> : <div className="prev-spacing"></div>}
            <ProjectCard elem={idx}/>
            {idx !== 0 ? <div className="next" onClick={() => changeJournal(1)} ><NavigateNextIcon style={{ fontSize: 80 }}/></div> : <div className="next-spacing"></div>}
        </div>
    );
};