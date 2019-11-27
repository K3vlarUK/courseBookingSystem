import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Customer = (props) => {

    if(!props.customer){
        return "L0ading..."
    }

    const url = "/customers/" + props.customer.id;

    return ( 
        <Fragment>
            <Link to={url} className="name">{props.customer.name}</Link>
            <p>Age: {props.customer.age}</p>
            <p>Town: {props.customer.town}</p>
        </Fragment>
     );
}
 
export default Customer;