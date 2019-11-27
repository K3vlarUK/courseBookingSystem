import React from 'react';
import Booking from './Booking';

const BookingList = (props) => {

    if(props.bookings.length === 0){
        return "L0ading.."
    }

    const bookings = props.bookings.map((booking, index) => {
        return (
            <li key={index} className="component-item">
                <div className="component">
                    <Booking booking={booking} />
                </div>
            </li>
        )
    })

    return ( 
        <ul className="component-list">
            {bookings}
        </ul>
     );
}
 
export default BookingList;