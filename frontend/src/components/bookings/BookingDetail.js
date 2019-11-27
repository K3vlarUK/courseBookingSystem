import React, { Component } from 'react';
import Booking from './Booking';

const BookingDetail = (props) => {

    if(!props.booking){
        return "L0ading..."
    }

    const handleDelete = () => {
        props.onDelete(props.booking.id)
    }

    return ( 
        <div className="component">
        <Booking booking={props.booking} />
            <p>Booked by: {props.booking.customer.name}</p>
            <button onClick={handleDelete}>Delete this booking</button>
        </div>
     );
}
 
export default BookingDetail;