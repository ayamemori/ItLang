import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import { showHomeHeader, showHomeFooter } from '../components/Home/HomeShow';

export default class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            erorr: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/edu/get/lessons")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }

            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        const first_course = { items }.items['1']
        const second_course = { items }.items['2']
        function lesson(obj, key) {
            return obj['lessons'][key]
        }

        if (error) {
            return <p> Error {error.message}</p>
        } else if (!isLoaded) {
            return <p> Loading.. </p>
        }
        else if (typeof first_course == 'undefined') {
            return <p> Loading.. </p>
        }
        else {
            console.log(lesson(first_course, '1'))
            return (
                <>
                    {showHomeHeader()}
                    <div className="courses__inner">
                        <Row className="courses__block">
                            <Col className="col-sm-12 col-md-12 col-lg-5 col-xl-4 col-xxl-3 courses__photo">
                                <img
                                    src={`data:image/png;base64, ${first_course['preview']}`}
                                    alt=""
                                    width="300px"
                                />
                            </Col>

                            <Col className="courses__info">
                                <div className="courses__title">
                                    {first_course["course_name"]}
                                </div>

                                <div className="mt-3 mb-3 suptitle">
                                    {first_course["description"]}
                                </div>

                                <table class="table table-bordered table-striped table-hover">
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td> Вступний урок </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td> Застосування англійської в ІТ </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td> Поширені помилки та їх вирішення </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </Col>
                        </Row>



                        <Row className="courses__block">
                            <Col className="col-sm-12 col-md-12 col-lg-5 col-xl-4 col-xxl-3 courses__photo">
                                <img
                                    src={`data:image/png;base64, ${second_course['preview']}`}
                                    alt=""
                                    width="300px"
                                />
                            </Col>

                            <Col className="courses__info">
                                <div className="courses__title">
                                    {second_course["course_name"]}
                                </div>

                                <div className="mt-3 mb-3 suptitle">
                                    {second_course["description"]}
                                </div>

                                <table class="table table-bordered table-striped table-hover">
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td> Past Simple </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td> Present Simple </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td> Future Simple </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Col>
                        </Row>
                    </div>
                    {showHomeFooter()}
                </>
            );
        }
    }
}
