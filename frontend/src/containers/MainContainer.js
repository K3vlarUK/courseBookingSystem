import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import CustomerContainer from './customers/CustomerContainer';
import CourseContainer from './courses/CourseContainer';
import BookingContainer from './bookings/BookingContainer';

class MainContainer extends Component {
    render() { 
        return ( 
            <div>
                <Router>
                    <React.Fragment>
                        <NavBar />
                        <Switch>
                            <Route path="/customers" component={CustomerContainer} />
                        </Switch>
                        <Switch>
                            <Route path="/courses" component={CourseContainer} />
                        </Switch>
                        <Switch>
                            <Route path="/bookings" component={BookingContainer} />
                        </Switch>
                    </React.Fragment>
                </Router>
            </div>
         );
    }
}
 
export default MainContainer;