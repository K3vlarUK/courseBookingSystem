import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BookingList from '../../components/bookings/BookingList';
import Request from '../../helpers/request';
import BookingDetail from '../../components/bookings/BookingDetail';

class BookingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bookings: []
         }
         this.findBookingById = this.findBookingById.bind(this);
         this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        const request = new Request();
        request.get('/api/bookings')
        .then(data => {
            this.setState({
                bookings: data._embedded.bookings
            })
        })
    }

    findBookingById(id){
        return this.state.bookings.find((booking) => {
            return booking.id === parseInt(id);
        })
    }

    handleDelete(id){
        const request = new Request();
        const url = '/api/bookings/' + id;
        request.delete(url)
        .then(() => {
            window.location = '/bookings';
        })
    }

    render() { 
        return ( 
            <Router>
                <Fragment>
                    <Switch>
                    <Route exact path="/bookings/:id" render={(props) => {
                        const id = props.match.params.id;
                        const booking = this.findBookingById(id);
                        return <BookingDetail booking={booking} onDelete={this.handleDelete} />
                    }} />
                        <Route render={() => {
                        return <BookingList bookings={this.state.bookings} />
                        }} />
                    </Switch>
                </Fragment>
            </Router>
         );
    }
}
 
export default BookingContainer;