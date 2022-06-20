import React, { Component } from 'react';
import { showLessonHeader, showLessonSidebar } from '../../components/Account/AccountShow';
import { Button } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default class CourseTest extends Component {
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
                                one_test: '',
                                two_test: '',
                                three_test: '',
                                four_test: '',
                                five_test: '',
                                six_test: '',
                                seven_test: '',
                                eight_test: '',
                                nine_test: '',
                                ten_test: '',
                            }}

                            onSubmit={async (values) => {
                                await sleep(500);
                                alert(JSON.stringify(values, null, 2));
                            }}
                        >
                            {({ values }) => (
                                <Form className="mt-3">
                                    <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                        <div>1. Lorem ipsum dolor sit amet?</div>
                                        <label>
                                            <Field className="test__radio" type="radio" name="one_test" value="one" />
                                            One
                                        </label>
                                        <label>
                                            <Field className="test__radio" type="radio" name="one_test" value="two" />
                                            Two
                                        </label>
                                        <label>
                                            <Field className="test__radio" type="radio" name="one_test" value="three" />
                                            Three
                                        </label>
                                    </div>

                                    <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                        <div>2. Lorem ipsum dolor sit amet?</div>
                                        <label>
                                            <Field className="test__radio" type="radio" name="two_test" value="one" />
                                            One
                                        </label>
                                        <label>
                                            <Field className="test__radio" type="radio" name="two_test" value="two" />
                                            Two
                                        </label>
                                        <label>
                                            <Field className="test__radio" type="radio" name="two_test" value="three" />
                                            Three
                                        </label>
                                    </div>

                                    <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                        <div>3. Lorem ipsum dolor sit amet?</div>
                                        <label>
                                            <Field className="test__radio" type="radio" name="three_test" value="one" />
                                            One
                                        </label>
                                        <label>
                                            <Field className="test__radio" type="radio" name="three_test" value="two" />
                                            Two
                                        </label>
                                        <label>
                                            <Field className="test__radio" type="radio" name="three_test" value="three" />
                                            Three
                                        </label>
                                    </div>

                                    <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                        <div>4. Lorem ipsum dolor sit amet?</div>
                                        <label>
                                            <Field className="test__radio" type="radio" name="four_test" value="one" />
                                            One
                                        </label>
                                        <label>
                                            <Field className="test__radio" type="radio" name="four_test" value="two" />
                                            Two
                                        </label>
                                        <label>
                                            <Field className="test__radio" type="radio" name="four_test" value="three" />
                                            Three
                                        </label>
                                    </div>

                                    <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                        <div>5. Lorem ipsum dolor sit amet?</div>
                                        <label>
                                            <Field className="test__radio" type="radio" name="five_test" value="one" />
                                            One
                                        </label>
                                        <label>
                                            <Field className="test__radio" type="radio" name="five_test" value="two" />
                                            Two
                                        </label>
                                        <label>
                                            <Field className="test__radio" type="radio" name="five_test" value="three" />
                                            Three
                                        </label>
                                    </div>

                                    <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                        <div>6. Lorem ipsum dolor sit amet?</div>
                                        <label>
                                            <Field className="test__radio" type="radio" name="six_test" value="one" />
                                            One
                                        </label>
                                        <label>
                                            <Field className="test__radio" type="radio" name="six_test" value="two" />
                                            Two
                                        </label>
                                        <label>
                                            <Field className="test__radio" type="radio" name="six_test" value="three" />
                                            Three
                                        </label>
                                    </div>

                                    <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                        <div>7. Lorem ipsum dolor sit amet?</div>
                                        <label>
                                            <Field className="test__radio" type="radio" name="seven_test" value="one" />
                                            One
                                        </label>
                                        <label>
                                            <Field className="test__radio" type="radio" name="seven_test" value="two" />
                                            Two
                                        </label>
                                        <label>
                                            <Field className="test__radio" type="radio" name="seven_test" value="three" />
                                            Three
                                        </label>
                                    </div>

                                    <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                        <div>8. Lorem ipsum dolor sit amet?</div>
                                        <label>
                                            <Field className="test__radio" type="radio" name="eight_test" value="one" />
                                            One
                                        </label>
                                        <label>
                                            <Field className="test__radio" type="radio" name="eight_test" value="two" />
                                            Two
                                        </label>
                                        <label>
                                            <Field className="test__radio" type="radio" name="eight_test" value="three" />
                                            Three
                                        </label>
                                    </div>

                                    <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                        <div>9. Lorem ipsum dolor sit amet?</div>
                                        <label>
                                            <Field className="test__radio" type="radio" name="nine_test" value="one" />
                                            One
                                        </label>
                                        <label>
                                            <Field className="test__radio" type="radio" name="nine_test" value="two" />
                                            Two
                                        </label>
                                        <label>
                                            <Field className="test__radio" type="radio" name="nine_test" value="three" />
                                            Three
                                        </label>
                                    </div>

                                    <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                        <div>10. Lorem ipsum dolor sit amet?</div>
                                        <label>
                                            <Field className="test__radio" type="radio" name="ten_test" value="one" />
                                            One
                                        </label>
                                        <label>
                                            <Field className="test__radio" type="radio" name="ten_test" value="two" />
                                            Two
                                        </label>
                                        <label>
                                            <Field className="test__radio" type="radio" name="ten_test" value="three" />
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
