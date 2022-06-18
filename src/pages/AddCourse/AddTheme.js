import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import RichTextEditor from '../../components/RichTextEditor';


export default class AddTheme extends Component {
    state = {
        questions: []
    }

    addQuestion = () => {
        const newQuestion = this.state.questions
        if (newQuestion.length === 0) {
            newQuestion.push(0)
        }

        else {
            const lastElement = newQuestion[newQuestion.length - 1]
            newQuestion.push(lastElement + 1)
        }

        this.setState({
            questions: newQuestion
        })

        console.log(newQuestion)
    }

    render() {
        const addQuestion = this.addQuestion;

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

                            <div className="test">
                                {this.state.questions.map((index) => {
                                    return (
                                        <div className="box" key={index}>
                                            <Form className="d-flex flex-column mt-2 mb-5">
                                                <Col className="col-8 mb-3">
                                                    <Form.Control type="text" placeholder='Питання' />
                                                </Col>

                                                <Col className="col-2 mb-2">
                                                    <Form.Control type="text" placeholder='Варіант відповіді' />
                                                </Col>

                                                <Col className="col-2 mb-2">
                                                    <Form.Control type="text" placeholder='Варіант відповіді' />
                                                </Col>

                                                <Col className="col-2 mb-2">
                                                    <Form.Control type="text" placeholder='Варіант відповіді' />
                                                </Col>

                                                <Col className="col-2 mb-3">
                                                    <Form.Control type="text" placeholder='Варіант відповіді' />
                                                </Col>

                                                <Col className="col-2">
                                                    <Form.Control type="text" placeholder='Правильна відповідь' />
                                                </Col>
                                            </Form>
                                        </div>
                                    )
                                })}
                            </div>

                            <Row className="d-flex flex-row justify-content-evenly mt-3">
                                <Button className="col-3 orng__button many" variant="warning" onClick={addQuestion}>Додати питання</Button>
                            </Row>

                            <Button type="submit" className="orng__button" variant="warning">Зберегти</Button>
                        </Form>
                    </div>
                </div>
            </>
        );
    }
}
