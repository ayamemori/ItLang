import React, { Component } from 'react';
import { showLessonHeader, showLessonSidebar } from '../../components/Account/AccountShow';
import { Button } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function checkAnswer(user, ans) {
    let counter = 0;
    let answers = Array.from(user.split('='));
    answers[0] = answers[0].slice(1)
    answers[answers.length-1] = answers[answers.length-1].slice(0, -1)
    for (let i in answers) {
        if (answers[i] === ans[i][2]) {
            counter++
        }
        else {
            continue
        }
    }
    console.log(counter);
    alert('You got' + ' ' + counter + ' ' + 'point(s)');
}

export default class CourseTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            erorr: null,
            isLoaded: false,
            key: '',
            arr: []
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/edu/get/test/9")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        key: Object.keys(result)[0],
                        arr: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        const { error, isLoaded, key, arr } = this.state;
        const array = arr[key];

        if (error) {
            return <p> Error {error.message}</p>
        } else if (!isLoaded) {
            return <p> Loading.. </p>
        } else {
            return (
                <>
                    {showLessonHeader()}
                    <div className="acc__container">
                        <div className="acc__inner">
                            <div className="title">
                                Тест
                            </div>

                            <Formik
                                initialValues={{}}
                                // {{
                                //     // one_test: '',
                                //     // two_test: '',
                                //     // three_test: '',
                                //     // four_test: '',
                                //     // five_test: '',
                                //     // six_test: '',
                                //     // seven_test: '',
                                //     // eight_test: '',
                                //     // nine_test: '',
                                //     // ten_test: ''
                                // }}
                                onSubmit={async (values) => {
                                    await sleep(500);
                                    const answers = (JSON.stringify(Object.values(values, null, 2).join('=')));
                                    checkAnswer(answers, { array }['array'])
                                }}
                            >
                                {({ values }) => (
                                    <Form className="mt-3">
                                        <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                            <div>1. {array[0][0]}</div>
                                            <label>
                                                <Field className="test__radio" type="radio" name="one_test" value="one" />
                                                {array[0][1][0]}
                                            </label>
                                            <label>
                                                <Field className="test__radio" type="radio" name="one_test" value="two" />
                                                {array[0][1][1]}
                                            </label>
                                            <label>
                                                <Field className="test__radio" type="radio" name="one_test" value="three" />
                                                {array[0][1][2]}
                                            </label>
                                        </div>

                                        <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                            <div>2. {array[1][0]}</div>
                                            <label>
                                                <Field className="test__radio" type="radio" name="two_test" value="one" />
                                                {array[1][1][0]}
                                            </label>
                                            <label>
                                                <Field className="test__radio" type="radio" name="two_test" value="two" />
                                                {array[1][1][1]}
                                            </label>
                                            <label>
                                                <Field className="test__radio" type="radio" name="two_test" value="three" />
                                                {array[1][1][2]}
                                            </label>
                                        </div>

                                        <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                            <div>
                                                3. {array[2][0]}
                                            </div>
                                            <label>
                                                <Field className="test__radio" type="radio" name="three_test" value="one" />
                                                {array[2][1][0]}
                                            </label>
                                            <label>
                                                <Field className="test__radio" type="radio" name="three_test" value="two" />
                                                {array[2][1][1]}
                                            </label>
                                            <label>
                                                <Field className="test__radio" type="radio" name="three_test" value="three" />
                                                {array[2][1][2]}
                                            </label>
                                        </div>

                                        <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                            <div>
                                                4. {array[3][0]}
                                            </div>
                                            <label>
                                                <Field className="test__radio" type="radio" name="four_test" value="one" />
                                                {array[3][1][0]}
                                            </label>
                                            <label>
                                                <Field className="test__radio" type="radio" name="four_test" value="two" />
                                                {array[3][1][1]}
                                            </label>
                                            <label>
                                                <Field className="test__radio" type="radio" name="four_test" value="three" />
                                                {array[3][1][2]}
                                            </label>
                                        </div>

                                        <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                            <div>5. {array[4][0]}</div>
                                            <label>
                                                <Field className="test__radio" type="radio" name="five_test" value="one" />
                                                {array[4][1][0]}
                                            </label>
                                            <label>
                                                <Field className="test__radio" type="radio" name="five_test" value="two" />
                                                {array[4][1][1]}
                                            </label>
                                            <label>
                                                <Field className="test__radio" type="radio" name="five_test" value="three" />
                                                {array[4][1][2]}
                                            </label>
                                        </div>

                                        <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                            <div>6. {array[5][0]}</div>
                                            <label>
                                                <Field className="test__radio" type="radio" name="six_test" value="one" />
                                                {array[5][1][0]}
                                            </label>
                                            <label>
                                                <Field className="test__radio" type="radio" name="six_test" value="two" />
                                                {array[5][1][1]}
                                            </label>
                                            <label>
                                                <Field className="test__radio" type="radio" name="six_test" value="three" />
                                                {array[5][1][2]}
                                            </label>
                                        </div>

                                        <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                            <div>7. {array[6][0]}</div>
                                            <label>
                                                <Field className="test__radio" type="radio" name="seven_test" value="one" />
                                                {array[6][1][0]}
                                            </label>
                                            <label>
                                                <Field className="test__radio" type="radio" name="seven_test" value="two" />
                                                {array[6][1][1]}
                                            </label>
                                            <label>
                                                <Field className="test__radio" type="radio" name="seven_test" value="three" />
                                                {array[6][1][2]}
                                            </label>
                                        </div>

                                        <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                            <div>8. {array[7][0]}</div>
                                            <label>
                                                <Field className="test__radio" type="radio" name="eight_test" value="one" />
                                                {array[7][1][0]}
                                            </label>
                                            <label>
                                                <Field className="test__radio" type="radio" name="eight_test" value="two" />
                                                {array[7][1][1]}
                                            </label>
                                            <label>
                                                <Field className="test__radio" type="radio" name="eight_test" value="three" />
                                                {array[7][1][2]}
                                            </label>
                                        </div>

                                        <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                            <div>9. {array[8][0]}</div>
                                            <label>
                                                <Field className="test__radio" type="radio" name="nine_test" value="one" />
                                                {array[8][1][0]}
                                            </label>
                                            <label>
                                                <Field className="test__radio" type="radio" name="nine_test" value="two" />
                                                {array[8][1][1]}
                                            </label>
                                            <label>
                                                <Field className="test__radio" type="radio" name="nine_test" value="three" />
                                                {array[8][1][2]}
                                            </label>
                                        </div>

                                        <div className="d-flex flex-column mb-3" role="group" aria-labelledby="my-radio-group">
                                            <div>10. {array[9][0]}</div>
                                            <label>
                                                <Field className="test__radio" type="radio" name="ten_test" value="one" />
                                                {array[9][1][0]}
                                            </label>
                                            <label>
                                                <Field className="test__radio" type="radio" name="ten_test" value="two" />
                                                {array[9][1][1]}
                                            </label>
                                            <label>
                                                <Field className="test__radio" type="radio" name="ten_test" value="three" />
                                                {array[9][1][2]}
                                            </label>
                                        </div>

                                        <Button
                                            className="orng__button"
                                            type="submit"
                                            variant="warning">Перевірити
                                        </Button>

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
}