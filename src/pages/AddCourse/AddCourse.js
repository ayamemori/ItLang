import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Delete from '../../assets/img/delete.svg';
import { postCourses } from '../../action/PostCourses';

let name = React.createRef();
let photo = React.createRef();
let desc = React.createRef();
function courseClick() {
    return [
        name.current.value,
        photo.current.value,
        desc.current.value
    ]
}

export default class AddCourse extends Component {
    render() {
        return (
            <>
                <div className="admin__container">
                    <div className="acc__inner">
                        <Form>
                            <Row>
                                <Col className="col-xs-8 col-sm-12 col-md-8 col-lg-3 col-xl-3 col-xxl-3 upload__photo">
                                    Заставка курсу
                                    <input class="form-control mb-2" type="file" name="preview" multiple />
                                    <img className="show" alt="" />
                                </Col>

                                <Col className="col-xs-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 col-xxl-5">
                                    <Form.Group className="mb-3">
                                        <Form.Control ref={name} type="text" name="course_name" placeholder="Назва курсу" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control ref={desc} as="textarea" name="description" placeholder="Опис курсу" />
                                    </Form.Group>

                                    <div onClick={() => postCourses(courseClick())} href="/admin/addcourse/addlesson" className="ms-auto orng__button">Додати тему</div>
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
                    </div>
                </div>
            </>
        );
    }
}