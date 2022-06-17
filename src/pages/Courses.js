import React, { Component } from 'react';
import { Accordion, Row, Col } from 'react-bootstrap';

import EngIt from '../assets/img/engit.png';
import EngZno from '../assets/img/engzno.png';

import { showHomeHeader, showHomeFooter } from '../components/Home/HomeShow';

export default class Courses extends Component {
    render() {
        return (
            <>
                {showHomeHeader()}
                <div className="courses__inner">
                    <Row className="courses__block">
                        <Col className="col-sm-12 col-md-12 col-lg-5 col-xl-4 col-xxl-3 courses__photo">
                            <img
                                src={EngIt}
                                alt=""
                                width="300px"
                            />
                        </Col>

                        <Col className="courses__info">
                            <div className="courses__title">
                                Англійська для ІТ
                            </div>

                            <div className="mt-3 mb-3 suptitle">
                                Курс для усіх, хто хоче пов'язати своє життя з ІТ! Тут для вас зібрана інформація, необіхдна для поглиблення у цю сферу: від лексики до складання резюме!
                            </div>

                            <table class="table table-bordered table-striped table-hover">
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td> Англійська для ІТ </td>
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
                                src={EngZno}
                                alt=""
                                width="300px"
                            />
                        </Col>

                        <Col className="courses__info">
                            <div className="courses__title">
                                Підготовка до ЗНО
                            </div>

                            <div className="mt-3 mb-3 suptitle">
                                ЗНО - це завжди велика відповідальність, і не завжди легко підготуватись до нього самостійно. Якщо ти хочеш скласти іспит на усі 200 - тобі необхідний цей курс!
                            </div>

                            <table class="table table-bordered table-striped table-hover">
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td> Past Simple</td>
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
