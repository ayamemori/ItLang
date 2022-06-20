import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import RichTextEditor from '../../components/RichTextEditor';

import ImageUpload from '../../components/ImageUpload';

export default class AddBlog extends Component {
    render() {
        return (
            <>
                <div className="admin__container">
                    <div className="acc__inner">
                        <Form>
                            <Row>
                                <Col className="col-xs-8 col-sm-12 col-md-8 col-lg-3 col-xl-3 col-xxl-3">
                                    Заставка статті
                                    <ImageUpload />
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

                            <Col className="col-xs-8 col-sm-12 col-md-8 col-lg-3 col-xl-3 col-xxl-3 mt-3 mb-3">
                                Фото у статті
                                <ImageUpload />
                            </Col>
                            <RichTextEditor />
                        </Form>
                    </div>
                </div>
            </>
        );
    }
}
