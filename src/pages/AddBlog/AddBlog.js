import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import RichTextEditor from '../../components/RichTextEditor';

import Upload from '../../assets/img/blog2.jpg';

export default class AddBlog extends Component {

    render() {
        return (
            <>
                <div className="admin__container">
                    <div className="acc__inner">
                        <Form>
                            <Row>
                                <Col className="col-xs-8 col-sm-12 col-md-8 col-lg-3 col-xl-3 col-xxl-2">
                                    <div class="upload__photo">
                                        <input type="file" class="upload" name="avatar" id="" />
                                        <img className="w-100" src={Upload} alt="Паралакс статті" />
                                    </div>
                                </Col>

                                <Col className="col-xs-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 col-xxl-5 inputs__inner">
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" name="nameBlog" placeholder="Назва статті" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control as="textarea" name="captionBlog" placeholder="Опис статті" />
                                    </Form.Group>

                                    <Button href="/admin/addcourse/addtheme" className="ms-auto orng__button" variant="warning">Запостити</Button>
                                </Col>
                            </Row>
                            <RichTextEditor />
                        </Form>
                    </div>
                </div>
            </>
        );
    }
}
