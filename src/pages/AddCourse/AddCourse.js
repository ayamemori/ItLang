import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

import ImageUpload from '../../components/Upload';

import EngIt from '../../assets/img/engit.png';
import Delete from '../../assets/img/delete.svg';

import HomeGet from '../../action/HomeGet';

export default class AddCourse extends Component {
    render() {
        return (
            <>
                <div className="admin__container">
                    <div className="acc__inner">
                        <Form>
                            <Row>
                                <Col className="col-xs-8 col-sm-12 col-md-8 col-lg-3 col-xl-3 col-xxl-3">
                                    Заставка курсу
                                    <ImageUpload />
                                </Col>

                                <Col className="col-xs-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 col-xxl-5 inputs__inner">
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" name="nameCourse" placeholder="Назва курсу" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control as="textarea" name="captionCourse" placeholder="Опис курсу" />
                                    </Form.Group>

                                    <Button href="/admin/addcourse/addlesson" className="ms-auto orng__button" variant="warning">Додати тему</Button>
                                </Col>
                            </Row>
                        </Form>

                        <ol className="courses__list">
                            <li className="d-flex justify-content-between courses__item">
                                Intro
                                <button className="delete__btn"><img className="delete__img" src={Delete} alt="" /></button>
                            </li>

                            <li className="d-flex justify-content-between courses__item">
                                Тема 1
                                <button className="delete__btn"><img className="delete__img" src={Delete} alt="" /></button>
                            </li>

                            <li className="d-flex justify-content-between courses__item">
                                Тема 2
                                <button className="delete__btn"><img className="delete__img" src={Delete} alt="" /></button>
                            </li>

                            <li className="d-flex justify-content-between courses__item">
                                Тема 3
                                <button className="delete__btn"><img className="delete__img" src={Delete} alt="" /></button>
                            </li>
                        </ol>

                        <HomeGet/>
                    </div>
                </div>
            </>
        );
    }
}