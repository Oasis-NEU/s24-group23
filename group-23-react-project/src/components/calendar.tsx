import React from 'react';
import '../App.css';
import {CourseBlock, Course} from '../assets/cs-requirements';
import Semester from './semester';



const Calendar: React.FC = (coursesArray) => {
    console.log(coursesArray.coursesArray[0][0].courses[0].courseNames[0]);
    console.log(coursesArray.coursesArray[0][0].courses[1].courseNames[0]);
    console.log(coursesArray.coursesArray[0][0]);
    console.log(coursesArray.coursesArray[0][1]);
    const courseNameList = (coursesArray.coursesArray[0][4]).courses.map((course: Course) => course.courseNames[0]);
    console.log(courseNameList);

    return (
        <div>
            <h1>4-Year Plan</h1>
            <div className="underclassmen">
                <div className="year">
                    <h2>Year 1</h2>
                    <div className='semestersBlock'>
                        <Semester   semesterTitle="Spring Semester" 
                                    coursesList={coursesArray.coursesArray[0][0].courses.map((course: Course) => course.courseNames[0])} />
                        <Semester   semesterTitle="Fall Semester"
                                    coursesList={coursesArray.coursesArray[0][1].courses.map((course: Course) => course.courseNames[0])} />
                        <Semester   semesterTitle="Summer 1 Semester"
                                    coursesList={coursesArray.coursesArray[0][2].courses.map((course: Course) => course.courseNames[0])} />
                        <Semester   semesterTitle="Summer 2 Semester"
                                    coursesList={coursesArray.coursesArray[0][3].courses.map((course: Course) => course.courseNames[0])} />
                    </div>
                </div>
                <div className="year">
                    <h2>Year 2</h2>
                    <div className='semestersBlock'>
                        <Semester   semesterTitle="Spring Semester"
                                    coursesList={coursesArray.coursesArray[0][4].courses.map((course: Course) => course.courseNames[0])} />
                        <Semester   semesterTitle="Fall Semester"
                                    coursesList={coursesArray.coursesArray[0][5].courses.map((course: Course) => course.courseNames[0])} />
                        <Semester   semesterTitle="Summer 1 Semester"
                                    coursesList={coursesArray.coursesArray[0][6].courses.map((course: Course) => course.courseNames[0])} />
                        <Semester   semesterTitle="Summer 2 Semester"
                                    coursesList={coursesArray.coursesArray[0][7].courses.map((course: Course) => course.courseNames[0])} />
                    </div>
                </div>
            </div>
            <div className="upperclassmen">
                <div className="year">
                    <h2>Year 3</h2>
                    <div className='semestersBlock'>
                        <Semester  semesterTitle="Spring Semester"
                                   coursesList={coursesArray.coursesArray[0][8].courses.map((course: Course) => course.courseNames[0])} />
                        <Semester  semesterTitle="Fall Semester"
                                   coursesList={coursesArray.coursesArray[0][9].courses.map((course: Course) => course.courseNames[0])} />
                        <Semester  semesterTitle="Summer 1 Semester"
                                   coursesList={coursesArray.coursesArray[0][10].courses.map((course: Course) => course.courseNames[0])} />
                        <Semester  semesterTitle="Summer 2 Semester"
                                   coursesList={coursesArray.coursesArray[0][11].courses.map((course: Course) => course.courseNames[0])} />
                    </div>
                </div>
                <div className="year">
                    <h2>Year 4</h2>
                    <div className='semestersBlock'>
                        <Semester semesterTitle="Spring Semester"
                                    coursesList={coursesArray.coursesArray[0][12].courses.map((course: Course) => course.courseNames[0])} />
                        <Semester semesterTitle="Fall Semester"
                                    coursesList={coursesArray.coursesArray[0][13].courses.map((course: Course) => course.courseNames[0])} />
                        <Semester semesterTitle="Summer 1 Semester"
                                    coursesList={coursesArray.coursesArray[0][14].courses.map((course: Course) => course.courseNames[0])} />
                        <Semester semesterTitle="Summer 2 Semester"
                                    coursesList={coursesArray.coursesArray[0][15].courses.map((course: Course) => course.courseNames[0])} />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Calendar;