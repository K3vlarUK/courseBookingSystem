import React, { Component } from 'react';
import Customer from './Customer';

const CustomerDetail = (props) => {

    if(!props.customer){
        return "L0ading..."
    }

    const bookings = props.customer.bookings.map((booking, index) => {
        return <li key={index}>{booking.date}</li>
    })

    const handleDelete = () => {
        props.onDelete(props.customer.id);
    }

    return ( 
        <div className="component">
            <Customer customer={props.customer} />
            <p>Bookings: </p>
            <ul>{bookings}</ul>
            <button onClick={handleDelete}>Delete {props.customer.name}</button>
        </div>
     );
}
 
export default CustomerDetail;