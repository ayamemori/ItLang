import React, { Component } from 'react';
import { Card, Button, Row } from 'react-bootstrap';

export default class AdminPanel extends Component {
    render() {
        return (
            <>
                <div className="admin__container">
                    <div className="acc__inner">
                        <div className="title">
                            Hello, admin!
                        </div>

                        <div className="suptitle">
                            Нижче ви можете внести зміни в існуючі курси або додати новий.
                        </div>

                        <Row className="d-flex justify-content-evenly mb-5">
                            <Card className="m-3 admin__course">
                                <Card.Body>
                                    <Card.Title className="text-center">Англійська для ІТ</Card.Title>
                                </Card.Body>
                                <Button href="#" className="orng__button align-self-center" variant="warning">Редагувати</Button>
                            </Card>

                            <Card className="m-3 admin__course">
                                <Card.Body>
                                    <Card.Title className="text-center">Підготовка до ЗНО</Card.Title>
                                </Card.Body>
                                <Button href="#" className="orng__button align-self-center" variant="warning">Редагувати</Button>
                            </Card>

                            <Card className="m-3 admin__course">
                                <Button href="/admin/addcourse" className="add__course align-self-center" variant="warning">Додати</Button>
                            </Card>
                        </Row>

                        <div className="title">
                            Блог
                        </div>



                        <Row className="d-flex justify-content-evenly">
                            <Card className="m-3 admin__blog">
                                <Card.Body>
                                    <Card.Title> Хто такий QAOps і чим він займається? </Card.Title>
                                    <Card.Text className="card__text">
                                        QAOps (quality assurance + software operations) — не нова спеціалізація. У різних компаніях вже досить давно використовують різні зв'язки термінів Test та OPS для опису цієї проєктної ролі: у Microsoft обрали назву TestOps, Google - TestSecOps, в ЕРАМ - DevTestSecOps.
                                    </Card.Text>
                                    <Button href="/admin/addblog" className="orng__button align-self-start" variant="warning">Редагувати</Button>
                                </Card.Body>
                            </Card>

                            <Card className="m-3 admin__blog">
                                <Card.Body>
                                    <Card.Title> Lorem ipsum dolor sit amet. </Card.Title>
                                    <Card.Text className="card__text">
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Button href="/admin/addblog" className="orng__button align-self-start" variant="warning">Редагувати</Button>
                                </Card.Body>
                            </Card>

                            <Card className="m-3 admin__blog">
                                <Card.Body>
                                    <Card.Title> Lorem ipsum dolor sit amet. </Card.Title>
                                    <Card.Text className="card__text">
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Button href="/admin/addblog" className="orng__button align-self-start" variant="warning">Редагувати</Button>
                                </Card.Body>
                            </Card>

                            <Card className="m-3 admin__blog">
                                <Card.Body>
                                    <Card.Title> Lorem ipsum dolor sit amet. </Card.Title>
                                    <Card.Text className="card__text">
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Button href="/admin/addblog" className="orng__button align-self-start" variant="warning">Редагувати</Button>
                                </Card.Body>
                            </Card>

                            <Card className="m-3 admin__blog">
                                <Card.Body>
                                    <Card.Title> Lorem ipsum dolor sit amet. </Card.Title>
                                    <Card.Text className="card__text">
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Button href="/admin/addblog" className="orng__button align-self-start" variant="warning">Редагувати</Button>
                                </Card.Body>
                            </Card>

                            <Card className="m-3 admin__blog">
                                <Button href="/admin/addblog" className="add__course align-self-center" id="add__blog" variant="warning">Додати</Button>
                            </Card>
                        </Row>
                    </div>
                </div>
            </>
        );
    }
}

