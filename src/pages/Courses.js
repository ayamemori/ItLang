import React, { Component } from 'react';
import { Accordion, Row, Col } from 'react-bootstrap';

import EngIt from '../assets/img/engit.png';
import EngZno from '../assets/img/engzno.png';

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
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.drinks
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
        if (error) {
            return <p> Error {error.message}</p>
        } else if (!isLoaded) {
            return <p> Loading.. </p>
        } else {
            return (
                <>
                    {showHomeHeader()}
                    <div className="courses__inner">
                        <Row className="courses__block">
                            <Col className="col-sm-12 col-md-12 col-lg-5 col-xl-4 col-xxl-3 courses__photo">
                                <img
                                    key={items.name}
                                    src={items[0]['strDrinkThumb']}
                                    alt=""
                                    width="300px"
                                />
                            </Col>

                            <Col className="courses__info">
                                <div className="courses__title" key={items.name}>
                                    {items[0]['strDrink']}
                                </div>

                                <div className="mt-3 mb-3 suptitle" key={items.name}>
                                    {items[0]['strDrink']}
                                </div>

                                <table class="table table-bordered table-striped table-hover">
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td key={items.name}> {items[0]['strDrink']} </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td> Застосування англійської в ІТ</td>
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
                                    key={items.name}
                                    src={items[1]['strDrinkThumb']}
                                    alt=""
                                    width="300px"
                                />
                            </Col>

                            <Col className="courses__info">
                                <div className="courses__title" key={items.name}>
                                    {items[1]['strDrink']}
                                </div>

                                <div className="mt-3 mb-3 suptitle" key={items.name}>
                                    {items[1]['strDrink']}
                                </div>

                                <table class="table table-bordered table-striped table-hover">
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td key={items.name}> {items[1]['strDrink']} </td>
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
