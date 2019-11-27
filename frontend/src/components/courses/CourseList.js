import React from 'react';
import Course from './Course';
import {Link} from 'react-router-dom';

const CourseList = (props) => {

    if(props.courses.length === 0){
        return "L0ading.."
    }

    const courses = props.courses.map((course, index) => {
        return (
            <li key={index} className="component-item">
                <div className="component">
                    <Course course={course} />
                </div>
            </li>
        )
    })

    return (
        <div>
        <ul className="component-list">
            {courses}
        </ul>
        </div>
     );
}

export default CourseList;
