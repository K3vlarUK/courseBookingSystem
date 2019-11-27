import React from 'react';

const NavBar = (props) => {
    return ( 
        <header>
        <img src="/images/brain-image.png" alt="logo" />
            <ul>
                <li className="navLink">
                    <a href="/customers">Customers</a>
                </li>
                <li className="navLink">
                    <a href="/courses">Courses</a>
                </li>
                <li className="navLink">
                    <a href="/bookings">Bookings</a>
                </li>
            </ul>
        </header>
     );
}
 
export default NavBar;