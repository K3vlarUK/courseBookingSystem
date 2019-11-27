import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CourseList from '../../components/courses/CourseList';
import Request from '../../helpers/request';
import CourseDetail from '../../components/courses/Course';
import {Link} from 'react-router-dom';

class CourseContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            courses: [],
            foundCourses: []
         }
         this.findCourseById = this.findCourseById.bind(this);
         this.handleDelete = this.handleDelete.bind(this);
         this.findCoursesByTown = this.findCoursesByTown.bind(this);
    }

    componentDidMount() {
        const request = new Request();
        request.get('/api/courses')
        .then(data => {
            this.setState({
                courses: data._embedded.courses
            })
        })
    }

    findCourseById(id){
        return this.state.courses.find((course) => {
            return course.id === parseInt(id);
        })
    }

    findCoursesByTown(town){
        const request = new Request();
        let courseByTownUrl = `/courses/town/${town}`;
        request.get(courseByTownUrl)
        .then((data) => {
            this.setState({
                foundCourses: data
            })
        })
    }

    handleDelete(id){
        const request = new Request();
        const url = '/api/courses/' + id;
        request.delete(url)
        .then(() => {
            window.location = '/courses';
        })
    }

    render() { 
        return ( 
            <Router>
           
                <Fragment>
                    <Switch>
                        <Route exact path="/courses/town/:town" render={(props) => {
                            const town = props.match.params.town;
                            const courses = this.findCoursesByTown(town);
                            return <CourseList courses={this.state.foundCourses} />
                        }} />
                        <Route exact path="/courses/:id" render={(props) => {
                            const id = props.match.params.id;
                            const course = this.findCourseById(id);
                            return <CourseDetail course={this.state.courses} onDelete={this.handleDelete} />
                        }} />
                        <Route render={() => {
                        return <CourseList courses={this.state.courses} />
                        }} />
                    </Switch>
                </Fragment>
            </Router>
         );
    }
}
 
export default CourseContainer;