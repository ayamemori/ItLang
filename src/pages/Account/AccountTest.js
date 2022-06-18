import React, { Component } from 'react';
import { showLessonHeader, showLessonSidebar } from '../../components/Account/AccountShow';
import { Button } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';

export default class AccTest extends Component {
    render() {
        return (
            <>
                {showLessonHeader()}
                <div className="acc__container">
                    <div className="acc__inner">
                        <div className="title">
                            Тест
                        </div>

                        <Formik
                            initialValues={{
                                first__test: [],
                                second__test: '',
                                third__test: '',
                                fourth__test: '',
                                fifth__test: ''
                            }}

                            onSubmit={async (values) => {
                                await sleep(500);
                                alert(JSON.stringify(values, null, 2));
                            }}
                        >
                            {({ values }) => (
                                <Form className="mt-3">
                                    <div className="d-flex flex-column mb-3" role="group" aria-labelledby="checkbox-group">
                                        <div>1. Lorem ipsum dolor sit amet?</div>
                                        <label>
                                            <Field className="test__checkbox" type="checkbox" name="first__test" value="one" />
                                            One
                                        </label>
                                        <label>
                                            <Field className="test__checkbox" type="checkbox" name="first__test" value="two" />
                                            Two
                                        </label>
                                        <label>
                                            <Field className="test__checkbox" type="checkbox" name="first__test" value="three" />
                                            Three
                                        </label>
                                    </div>

                                    <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                        <div>2. Lorem ipsum dolor sit amet?</div>
                                        <label>
                                            <Field className="test__checkbox" type="radio" name="second__test" value="one" />
                                            One
                                        </label>
                                        <label>
                                            <Field className="test__checkbox" type="radio" name="second__test" value="two" />
                                            Two
                                        </label>
                                        <label>
                                            <Field className="test__checkbox" type="radio" name="second__test" value="three" />
                                            Three
                                        </label>
                                    </div>

                                    <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                        <div>3. Lorem ipsum dolor sit amet?</div>
                                        <label>
                                            <Field className="test__checkbox" type="radio" name="third__test" value="one" />
                                            One
                                        </label>
                                        <label>
                                            <Field className="test__checkbox" type="radio" name="third__test" value="two" />
                                            Two
                                        </label>
                                        <label>
                                            <Field className="test__checkbox" type="radio" name="third__test" value="three" />
                                            Three
                                        </label>
                                    </div>
                                    <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                        <div>4. Lorem ipsum dolor sit amet?</div>
                                        <label>
                                            <Field className="test__checkbox" type="radio" name="fourth__test" value="one" />
                                            One
                                        </label>
                                        <label>
                                            <Field className="test__checkbox" type="radio" name="fourth__test" value="two" />
                                            Two
                                        </label>
                                        <label>
                                            <Field className="test__checkbox" type="radio" name="fourth__test" value="three" />
                                            Three
                                        </label>
                                    </div>

                                    <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                        <div>5. Lorem ipsum dolor sit amet?</div>
                                        <label>
                                            <Field className="test__checkbox" type="radio" name="fifth__test" value="one" />
                                            One
                                        </label>
                                        <label>
                                            <Field className="test__checkbox" type="radio" name="fifth__test" value="two" />
                                            Two
                                        </label>
                                        <label>
                                            <Field className="test__checkbox" type="radio" name="fifth__test" value="three" />
                                            Three
                                        </label>
                                    </div>

                                    <Button className="orng__button" type="submit" variant="warning">Перевірити</Button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
                {showLessonSidebar()}
            </>
        );
    }
}
