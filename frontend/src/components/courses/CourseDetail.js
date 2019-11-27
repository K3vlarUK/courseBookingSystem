import React, { Component } from 'react';
import Course from './Course';

const CourseDetail = (props) => {

    if(!props.course){
        return "L0ading..."
    }

    const bookings = props.course.bookings.map((booking, index) => {
        return <li key={index}>{booking.date}</li>
    })

    const handleDelete = () => {
        props.onDelete(props.course.id);
    }

    return ( 
        <div className="component">
            <Course course={props.course} />
            <p>Bookings: </p>
            <ul>{bookings}</ul>
            <button onClick={handleDelete}>Delete {props.course.name}</button>
        </div>
     );
}
 
export default CourseDetail;