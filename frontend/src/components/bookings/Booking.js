import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Booking = (props) => {

    if(!props.booking){
        return "L0ading..."
    }

    const url = "/bookings/" + props.booking.id;

    return ( 
        <Fragment>
            <p><b>{props.booking.course.name}</b></p>
            <p>Booked on : {props.booking.date}</p>
            <Link to={url} className="name">View booking</Link>
        </Fragment>
     );
}
 
export default Booking;