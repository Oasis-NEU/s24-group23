import React from 'react';
import '../App.css';

interface SemesterProps {
    semesterTitle: string;
    coursesList: string[];
  }
  
  const Semester: React.FC<SemesterProps> = ({ semesterTitle, coursesList}) => {
    return (
      <div className="semester">
        <h3 className="semestertitle">{semesterTitle}</h3>
        <div className="courses">
            {coursesList.map((course, index) => (
                <h1 key={index} className="course">{course}</h1>
            ))}
        </div>
      </div>
    )
  }

export default Semester;