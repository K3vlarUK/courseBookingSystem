import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CustomerList from '../../components/customers/CustomerList';
import Request from '../../helpers/request';
import CustomerDetail from '../../components/customers/CustomerDetail';

class CustomerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            customers: []
         }
         this.findCustomerById = this.findCustomerById.bind(this);
         this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        const request = new Request();
        request.get('/api/customers')
        .then(data => {
            this.setState({
                customers: data._embedded.customers
            })
        })
    }

    findCustomerById(id){
        return this.state.customers.find((customer) => {
            return customer.id === parseInt(id);
        })
    }

    handleDelete(id){
        const request = new Request();
        const url = '/api/customers/' + id;
        request.delete(url)
        .then(() => {
            window.location = '/customers';
        });
    }

    render() { 
        return ( 
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/customers/:id" render={(props) => {
                        const id = props.match.params.id;
                        const customer = this.findCustomerById(id);
                        return <CustomerDetail customer={customer} onDelete={this.handleDelete} />
                        }} />
                        <Route render={() => {
                        return <CustomerList customers={this.state.customers} />
                        }} />
                    </Switch>
                </Fragment>
            </Router>
         );
    }
}
 
export default CustomerContainer;