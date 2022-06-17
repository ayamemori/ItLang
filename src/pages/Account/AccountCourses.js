import React, { Component } from 'react';
import { Card, Button, Accordion, Row, Col, Carousel } from 'react-bootstrap';
import { showAccountHeader, showAccountSidebar } from '../../components/Account/AccountShow';

export default class AccountCourses extends Component {
    render() {
        return (
            <>
                {showAccountHeader()}
                <div className="acc__container">
                    <div className="acc__inner">
                        <Carousel className="courses__carousel" data-ride="carousel" interval={1000000}>
                            <Carousel.Item>
                                <Row className="mt-5">
                                    <Col className="col-sm-12 col-md-12 col-lg-5 col-xl-4 col-xxl-3">
                                        <Card className="card__progress">
                                            <Card.Body className="d-flex flex-column align-self-center">
                                                <Card.Title className="mt-3 mb-3">Англійська для ІТ</Card.Title>
                                                <div class="progress">
                                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: '74%' }} aria-valuenow="74" aria-valuemin="0" aria-valuemax="100">74%</div>
                                                </div>
                                                <Button href="/account/lesson" className="align-self-center mt-3 orng__button" variant="warning">Продовжити</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header className="completed">1. Past Simple</Accordion.Header>
                                                <Accordion.Body>
                                                    <ol>
                                                        <li>Тема</li>
                                                        <li>Відео</li>
                                                        <li>Повторення слів</li>
                                                        <li>Тест</li>
                                                    </ol>
                                                    <Button href="/account/lesson" className="orng__button" variant="warning">Пройти</Button>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>2. Present Simple</Accordion.Header>
                                                <Accordion.Body>
                                                    <ol>
                                                        <li>Тема</li>
                                                        <li>Відео</li>
                                                        <li>Повторення слів</li>
                                                        <li>Тест</li>
                                                    </ol>
                                                    <Button href="/account/lesson" className="orng__button" variant="warning">Пройти</Button>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>3. Future Simple</Accordion.Header>
                                                <Accordion.Body>
                                                    <ol>
                                                        <li>Тема</li>
                                                        <li>Відео</li>
                                                        <li>Повторення слів</li>
                                                        <li>Тест</li>
                                                    </ol>
                                                    <Button href="/account/lesson" className="orng__button" variant="warning">Пройти</Button>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>4. Lorem Lorem</Accordion.Header>
                                                <Accordion.Body>
                                                    <ol>
                                                        <li>Тема</li>
                                                        <li>Відео</li>
                                                        <li>Повторення слів</li>
                                                        <li>Тест</li>
                                                    </ol>
                                                    <Button href="/account/lesson" className="orng__button" variant="warning">Пройти</Button>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header>5. Lorem Lorem</Accordion.Header>
                                                <Accordion.Body>
                                                    <ol>
                                                        <li>Тема</li>
                                                        <li>Відео</li>
                                                        <li>Повторення слів</li>
                                                        <li>Тест</li>
                                                    </ol>
                                                    <Button href="/account/lesson" className="orng__button" variant="warning">Пройти</Button>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>6. Lorem Lorem</Accordion.Header>
                                                <Accordion.Body>
                                                    <ol>
                                                        <li>Тема</li>
                                                        <li>Відео</li>
                                                        <li>Повторення слів</li>
                                                        <li>Тест</li>
                                                    </ol>
                                                    <Button href="/account/lesson" className="orng__button" variant="warning">Пройти</Button>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                        </Accordion>
                                    </Col>
                                </Row>
                            </Carousel.Item>

                            <Carousel.Item>
                                <Row className="mt-5">
                                    <Col className="col-sm-12 col-md-12 col-lg-5 col-xl-4 col-xxl-3">
                                        <Card className="card__progress">
                                            <Card.Body className="d-flex flex-column align-self-center">
                                                <Card.Title className="mt-3 mb-3">Підготовка до ЗНО</Card.Title>
                                                <div class="progress">
                                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: '45%' }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
                                                </div>
                                                <Button href="/account/lesson" className="align-self-center mt-3 orng__button" variant="warning">Продовжити</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header className="completed">1. Past Simple</Accordion.Header>
                                                <Accordion.Body>
                                                    <ol>
                                                        <li>Тема</li>
                                                        <li>Відео</li>
                                                        <li>Повторення слів</li>
                                                        <li>Тест</li>
                                                    </ol>
                                                    <Button href="/account/lesson" className="orng__button" variant="warning">Пройти</Button>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>2. Present Simple</Accordion.Header>
                                                <Accordion.Body>
                                                    <ol>
                                                        <li>Тема</li>
                                                        <li>Відео</li>
                                                        <li>Повторення слів</li>
                                                        <li>Тест</li>
                                                    </ol>
                                                    <Button href="/account/lesson" className="orng__button" variant="warning">Пройти</Button>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>3. Future Simple</Accordion.Header>
                                                <Accordion.Body>
                                                    <ol>
                                                        <li>Тема</li>
                                                        <li>Відео</li>
                                                        <li>Повторення слів</li>
                                                        <li>Тест</li>
                                                    </ol>
                                                    <Button href="/account/lesson" className="orng__button" variant="warning">Пройти</Button>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>4. Lorem Lorem</Accordion.Header>
                                                <Accordion.Body>
                                                    <ol>
                                                        <li>Тема</li>
                                                        <li>Відео</li>
                                                        <li>Повторення слів</li>
                                                        <li>Тест</li>
                                                    </ol>
                                                    <Button href="/account/lesson" className="orng__button" variant="warning">Пройти</Button>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header>5. Lorem Lorem</Accordion.Header>
                                                <Accordion.Body>
                                                    <ol>
                                                        <li>Тема</li>
                                                        <li>Відео</li>
                                                        <li>Повторення слів</li>
                                                        <li>Тест</li>
                                                    </ol>
                                                    <Button href="/account/lesson" className="orng__button" variant="warning">Пройти</Button>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>6. Lorem Lorem</Accordion.Header>
                                                <Accordion.Body>
                                                    <ol>
                                                        <li>Тема</li>
                                                        <li>Відео</li>
                                                        <li>Повторення слів</li>
                                                        <li>Тест</li>
                                                    </ol>
                                                    <Button href="/account/lesson" className="orng__button" variant="warning">Пройти</Button>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                        </Accordion>
                                    </Col>

                                </Row>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                {showAccountSidebar()}
            </>
        );
    }
}
