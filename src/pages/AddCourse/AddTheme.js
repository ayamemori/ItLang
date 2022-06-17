import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import RichTextEditor from '../../components/RichTextEditor';

export default class AddTheme extends Component {
    render() {
        return (
            <>
                <div className="admin__container">
                    <div className="acc__inner">
                        <Form>
                            <Row>
                                <Col className="col-xs-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 col-xxl-5 inputs__inner">
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" name="nameCourse" placeholder="Назва теми" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="mt-4 mb-4">
                                <label for="formFile" class="form-label">Фото до теми</label>
                                <input class="form-control" type="file" id="formFile" />
                            </div>

                            <RichTextEditor />
                            <Button type="submit" className=" orng__button" variant="warning">Зберегти</Button>
                        </Form>
                    </div>
                </div>
            </>
        );
    }
}
