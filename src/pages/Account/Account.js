import React, { Component } from 'react';
import { Button, Col, Row, Card, Form } from 'react-bootstrap';
import { showAccountHeader, showAccountSidebar } from '../../components/Account/AccountShow';
import acc from '../../assets/img/account.svg';

import '../../assets/js/progressit';
import '../../assets/js/progresseng';

export default class Account extends Component {
    render() {
        return (
            <>
                {showAccountHeader()}
                <div className="acc__container">
                    <div className="acc__inner">
                        
                        <div className="acc__block">
                            <div class="title">Особиста інформація</div>
                            <Form className="acc__form">
                                <Row>
                                    <Col className="col-sm-12 col-md-12 col-xl-3 col-xxl-2">
                                        <div class="upload__photo">
                                            {/* <input type="file" class="upload" name="avatar" id="avatar" /> */}
                                            <img src={acc} alt="" />
                                        </div>
                                    </Col>

                                    <Col className="col-sm-12 col-md-8 col-lg-5 col-xl-3 col-xxl-3 inputs__inner">
                                        <Form.Group className="mb-3">
                                            <Form.Label>Ім'я</Form.Label>
                                            <Form.Control type="email" placeholder="Василь" />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Прізвище</Form.Label>
                                            <Form.Control type="password" placeholder="Стус" />
                                        </Form.Group>
                                    </Col>

                                    <Col className="d-flex flex-column col-sm-12 col-md-8 col-lg-5 col-xl-3 col-xxl-3 inputs__inner">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="email" placeholder="Bober" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="password" placeholder="itlang@gmail.com" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Col className="col-3">
                                    <Button type="submit" className="ms-auto orng__button" id="submit__btn" variant="warning">Зберегти</Button>
                                </Col>
                            </Form>
                        </div>

                        <div className="acc__block">
                            <div class="title">Сертифікат</div>
                            <div class="col-xxl-7 suptitle">
                                Після проходження курсів ти зможеш отримати сертифікат
                                та обміняти його на хорошу оцінку в свого викладача :)
                            </div>

                            <Row className="d-flex justify-content-evenly acc__cards">
                                <Card className="col-sm-10 col-md-10 col-lg-5 col-xl-4 cards">
                                    <Card.Body>
                                        <Card.Title>Англійська для ІТ</Card.Title>

                                        <div class="progress-pie-chart-it" data-percent="66">
                                            <div class="ppc-progress-it">
                                                <div class="ppc-progress-fill-it"></div>
                                            </div>
                                            <div class="ppc-percents-it">
                                                <div class="pcc-percents-wrapper">
                                                    <span>%</span>
                                                </div>
                                            </div>
                                        </div>

                                        <Button href="/account" className="orng__button" variant="warning">Отримати сертифікат</Button>
                                    </Card.Body>
                                </Card>

                                <Card className="col-sm-10 col-md-10 col-lg-5 col-xl-4 cards">
                                    <Card.Body>
                                        <Card.Title>Підготовка до ЗНО</Card.Title>

                                        <div class="progress-pie-chart-eng" data-percent="25">
                                            <div class="ppc-progress-eng">
                                                <div class="ppc-progress-fill-eng"></div>
                                            </div>
                                            <div class="ppc-percents-eng">
                                                <div class="pcc-percents-wrapper">
                                                    <span>%</span>
                                                </div>
                                            </div>
                                        </div>

                                        <Button href="/account" className="orng__button" variant="warning">Отримати сертифікат</Button>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </div>
                    </div>
                </div>
                {showAccountSidebar()}
            </>
        );
    }
}
