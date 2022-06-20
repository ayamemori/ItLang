import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import RichTextEditor from '../../components/RichTextEditor';

const AddTheme = props => {

    let question1 = React.createRef();
    let question2 = React.createRef();
    let question3 = React.createRef();
    let question4 = React.createRef();
    let question5 = React.createRef();
    let question6 = React.createRef();
    let question7 = React.createRef();
    let question8 = React.createRef();
    let question9 = React.createRef();
    let question10 = React.createRef();

    let variant11 = React.createRef();
    let variant12 = React.createRef();
    let variant13 = React.createRef();
    let answer1 = React.createRef();

    let variant21 = React.createRef();
    let variant22 = React.createRef();
    let variant23 = React.createRef();
    let answer2 = React.createRef();

    let variant31 = React.createRef();
    let variant32 = React.createRef();
    let variant33 = React.createRef();
    let answer3 = React.createRef();

    let variant41 = React.createRef();
    let variant42 = React.createRef();
    let variant43 = React.createRef();
    let answer4 = React.createRef();

    let variant51 = React.createRef();
    let variant52 = React.createRef();
    let variant53 = React.createRef();
    let answer5 = React.createRef();

    let variant61 = React.createRef();
    let variant62 = React.createRef();
    let variant63 = React.createRef();
    let answer6 = React.createRef();

    let variant71 = React.createRef();
    let variant72 = React.createRef();
    let variant73 = React.createRef();
    let answer7 = React.createRef();

    let variant81 = React.createRef();
    let variant82 = React.createRef();
    let variant83 = React.createRef();
    let answer8 = React.createRef();

    let variant91 = React.createRef();
    let variant92 = React.createRef();
    let variant93 = React.createRef();
    let answer9 = React.createRef();

    let variant101 = React.createRef();
    let variant102 = React.createRef();
    let variant103 = React.createRef();
    let answer10 = React.createRef();

    function questionsApply() {
        console.log(
            [
                question1.current.value,
                question2.current.value,
                question3.current.value,
                question4.current.value,
                question5.current.value,
                question6.current.value,
                question7.current.value,
                question8.current.value,
                question9.current.value,
                question10.current.value
            ],
            [
                variant11.current.value,
                variant12.current.value,
                variant13.current.value,

                variant21.current.value,
                variant22.current.value,
                variant23.current.value,

                variant31.current.value,
                variant32.current.value,
                variant33.current.value,

                variant41.current.value,
                variant42.current.value,
                variant43.current.value,

                variant51.current.value,
                variant52.current.value,
                variant53.current.value,

                variant61.current.value,
                variant62.current.value,
                variant63.current.value,

                variant71.current.value,
                variant72.current.value,
                variant73.current.value,

                variant81.current.value,
                variant82.current.value,
                variant83.current.value,

                variant91.current.value,
                variant92.current.value,
                variant93.current.value,

                variant101.current.value,
                variant102.current.value,
                variant103.current.value
            ],
            [
                answer1.current.value,
                answer2.current.value,
                answer3.current.value,
                answer4.current.value,
                answer5.current.value,
                answer6.current.value,
                answer7.current.value,
                answer8.current.value,
                answer9.current.value,
                answer10.current.value
            ]
        )
    }
    
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

                        <RichTextEditor />

                        <ol>
                            <li>
                                <Form className="d-flex flex-column mt-2 mb-5">
                                    <Col className="col-8 mb-3">
                                        <Form.Control ref={question1} type="text" placeholder='Питання' name="question" />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant11} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant12} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant13} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2">
                                        <Form.Control ref={answer1} type="text" placeholder='Правильна відповідь' />
                                    </Col>
                                </Form>
                            </li>


                            <li>
                                <Form className="d-flex flex-column mt-2 mb-5">
                                    <Col className="col-8 mb-3">
                                        <Form.Control ref={question2} type="text" placeholder='Питання' />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant21} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant22} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2 mb-3">
                                        <Form.Control ref={variant23} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2">
                                        <Form.Control ref={answer2} type="text" placeholder='Правильна відповідь' />
                                    </Col>
                                </Form>
                            </li>

                            <li>
                                <Form className="d-flex flex-column mt-2 mb-5">
                                    <Col className="col-8 mb-3">
                                        <Form.Control ref={question3} type="text" placeholder='Питання' />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant31} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant32} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2 mb-3">
                                        <Form.Control ref={variant33} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2">
                                        <Form.Control ref={answer3} type="text" placeholder='Правильна відповідь' />
                                    </Col>
                                </Form>
                            </li>

                            <li>
                                <Form className="d-flex flex-column mt-2 mb-5">
                                    <Col className="col-8 mb-3">
                                        <Form.Control ref={question4} type="text" placeholder='Питання' />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant41} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant42} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2 mb-3">
                                        <Form.Control ref={variant43} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2">
                                        <Form.Control ref={answer4} type="text" placeholder='Правильна відповідь' />
                                    </Col>
                                </Form>
                            </li>

                            <li>
                                <Form className="d-flex flex-column mt-2 mb-5">
                                    <Col className="col-8 mb-3">
                                        <Form.Control ref={question5} type="text" placeholder='Питання' />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant51} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant52} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2 mb-3">
                                        <Form.Control ref={variant53} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2">
                                        <Form.Control ref={answer5} type="text" placeholder='Правильна відповідь' />
                                    </Col>
                                </Form>
                            </li>

                            <li>
                                <Form className="d-flex flex-column mt-2 mb-5">
                                    <Col className="col-8 mb-3">
                                        <Form.Control ref={question6} type="text" placeholder='Питання' />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant61} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant62} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2 mb-3">
                                        <Form.Control ref={variant63} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2">
                                        <Form.Control ref={answer6} type="text" placeholder='Правильна відповідь' />
                                    </Col>
                                </Form>
                            </li>

                            <li>
                                <Form className="d-flex flex-column mt-2 mb-5">
                                    <Col className="col-8 mb-3">
                                        <Form.Control ref={question7} type="text" placeholder='Питання' />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant71} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant72} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2 mb-3">
                                        <Form.Control ref={variant73} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2">
                                        <Form.Control ref={answer7} type="text" placeholder='Правильна відповідь' />
                                    </Col>
                                </Form>
                            </li>

                            <li>
                                <Form className="d-flex flex-column mt-2 mb-5">
                                    <Col className="col-8 mb-3">
                                        <Form.Control ref={question8} type="text" placeholder='Питання' />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant81} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant82} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2 mb-3">
                                        <Form.Control ref={variant83} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2">
                                        <Form.Control ref={answer8} type="text" placeholder='Правильна відповідь' />
                                    </Col>
                                </Form>
                            </li>

                            <li>
                                <Form className="d-flex flex-column mt-2 mb-5">
                                    <Col className="col-8 mb-3">
                                        <Form.Control ref={question9} type="text" placeholder='Питання' />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant91} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant92} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2 mb-3">
                                        <Form.Control ref={variant93} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2">
                                        <Form.Control ref={answer9} type="text" placeholder='Правильна відповідь' />
                                    </Col>
                                </Form>
                            </li>

                            <li>
                                <Form className="d-flex flex-column mt-2 mb-5">
                                    <Col className="col-8 mb-3">
                                        <Form.Control ref={question10} type="text" placeholder='Питання' />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant101} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2 mb-2">
                                        <Form.Control ref={variant102} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2 mb-3">
                                        <Form.Control ref={variant103} type="text" placeholder='Варіант відповіді' />
                                    </Col>

                                    <Col className="col-2">
                                        <Form.Control ref={answer10} type="text" placeholder='Правильна відповідь' />
                                    </Col>
                                </Form>
                            </li>
                        </ol>

                        <div onClick={() => questionsApply()} class="orng__button">Зберегти</div>

                    </Form>
                </div>
            </div >
        </>
    );
}

export default AddTheme;