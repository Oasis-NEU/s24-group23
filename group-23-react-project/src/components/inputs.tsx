
import React, { useEffect, useState } from 'react';
import { IDom, parse, stringify } from 'html-parse-string';
import csRequirements from '../assets/cs-requirements';
import '../App.css';

const majors = new Map([
    ["Computer Science BS", "https://catalog.northeastern.edu/undergraduate/computer-information-science/computer-science/bscs"],
    ["Computer Science + Computer Engineering BS", "https://catalog.northeastern.edu/undergraduate/engineering/electrical-computer/computer-engineering-computer-science-bscompe/#programrequirementstext"],
    ["Computer Science + Business BS", "https://catalog.northeastern.edu/undergraduate/computer-information-science/computer-information-science-combined-majors/computer-science-business-administration-bs/#programrequirementstext"]
]);

function Inputs() {
    const [selectedMajor, setSelectedMajor] = useState('');

    console.log(csRequirements);

    const handleMajorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMajor(event.target.value);
        console.log(`${event.target.value}`);
    };
    const handleSubmit = () => {
        console.log(`Submitted Major: ${selectedMajor}`);
        getMajorLink(selectedMajor);
        window.location.href = '/';
    };

    return (
        <div>
            <label htmlFor="major">Select your major:</label>
            <select id="major" value={selectedMajor} onChange={handleMajorChange}>
                <option value="">-- Select Major --</option>
                <option value="Computer Science BS">Computer Science BS</option>
                <option value="Computer Science + Computer Engineering BS">Computer Science + Computer Engineering BS</option>
                <option value="Computer Science + Business BS">Computer Science + Business BS</option>
            </select>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

function getMajorLink(major: string): string {
    const link = majors.get(major);
    console.log(link);
    return link || '';
}


export default Inputs;
