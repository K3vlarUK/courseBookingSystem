import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Course = (props) => {
    
    if(!props.course){
        return "L0ading..."
    }

    const url = "/courses/" + props.course.id;

    return ( 
        <Fragment>
            <Link to={url} className="name">{props.course.name}</Link>
            <p>Town: {props.course.town}</p>
            <p>Star Rating: {props.course.starRating}</p>
        </Fragment>
     );
}
 
export default Course;