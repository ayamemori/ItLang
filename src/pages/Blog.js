import React, { Component } from 'react';
import { Button, Container, Card, Row } from 'react-bootstrap';

import EngIt from '../assets/img/engit.png';

import { showHomeHeader, showHomeFooter } from '../components/Home/HomeShow';

export default class Blog extends Component {
    render() {
        return (
            <>
                {showHomeHeader()}

                <Container className="mb-4">
                    <div className="wrapper">
                        <div className="blog__title">
                            <p>Блог сайту</p>
                        </div>

                        <div className="blog__suptitle">
                            <p>Статті, що допоможуть вам у вивченні курсів. Кожна із них наповнена цікавою та корисною інформацією, яка доповнить ваші знання та навчить чогось нового. Just do it!</p>
                        </div>
                    </div>

                    <Row xs={1} md={2} xl={2} className="d-flex justify-content-evenly">
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <>
                                <Card className="m-3 blog__card" style={{ width: '25rem' }}>
                                    <Card.Img variant="top" className="w-75 mx-auto" src={EngIt} />
                                    <Card.Body>
                                        <Card.Title className="text-center">Хто такий QAOps і чим він займається?</Card.Title>
                                        <Card.Text className="card__text">
                                        QAOps (quality assurance + software operations) — не нова спеціалізація. У різних компаніях вже досить давно використовують різні зв'язки термінів Test та OPS для опису цієї проєктної ролі: у Microsoft обрали назву TestOps, Google - TestSecOps, в ЕРАМ - DevTestSecOps. 
                                        </Card.Text>
                                    </Card.Body>
                                    <Button href="/blogpost" className="orng__button align-self-center" variant="warning">Читати</Button>
                                </Card>

                                <Card className="m-3 blog__card" style={{ width: '25rem' }}>
                                    <Card.Img variant="top" className="w-75 mx-auto" src={EngIt} />
                                    <Card.Body>
                                        <Card.Title className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing.</Card.Title>
                                        <Card.Text className="card__text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem vel illo magnam accusantium nobis possimus quod qui quidem quibusdam?
                                        </Card.Text>
                                    </Card.Body>
                                    <Button href="#" className="orng__button align-self-center" variant="warning">Читати</Button>
                                </Card>

                                <Card className="m-3 blog__card" style={{ width: '25rem' }}>
                                    <Card.Img variant="top" className="w-75 mx-auto" src={EngIt} />
                                    <Card.Body>
                                        <Card.Title className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing.</Card.Title>
                                        <Card.Text className="card__text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a vero reiciendis laudantium corporis saepe tenetur error qui odit sequi!
                                        </Card.Text>
                                    </Card.Body>
                                    <Button href="#" className="orng__button align-self-center" variant="warning">Читати</Button>
                                </Card>

                                <Card className="m-3 blog__card" style={{ width: '25rem' }}>
                                    <Card.Img variant="top" className="w-75 mx-auto" src={EngIt} />
                                    <Card.Body>
                                        <Card.Title className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing.</Card.Title>
                                        <Card.Text className="card__text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a vero reiciendis laudantium corporis saepe tenetur error qui odit sequi!
                                        </Card.Text>
                                    </Card.Body>
                                    <Button href="#" className="orng__button align-self-center" variant="warning">Читати</Button>
                                </Card>

                                <Card className="m-3 blog__card" style={{ width: '25rem' }}>
                                    <Card.Img variant="top" className="w-75 mx-auto" src={EngIt} />
                                    <Card.Body>
                                        <Card.Title className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing.</Card.Title>
                                        <Card.Text className="card__text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a vero reiciendis laudantium corporis saepe tenetur error qui odit sequi!
                                        </Card.Text>
                                    </Card.Body>
                                    <Button href="#" className="orng__button align-self-center" variant="warning">Читати</Button>
                                </Card>
                            </>
                        ))}
                    </Row>
                </Container>

                {showHomeFooter()}
            </>
        );
    }
}
