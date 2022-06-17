import React, { Component } from 'react';
import { showLessonHeader, showLessonSidebar } from '../../components/Account/AccountShow';
import { Button } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import Post from '../../assets/img/blog1.png';

import { thequestions } from '../../assets/js/quiz';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default class CourseTheme extends Component {
    state = { index: 0, arrindex: 0, clicked: false, correctanswers: 0 }

    makeselection = (e) => { // eslint-disable-next-line
        thequestions.map(q => { // eslint-disable-next-line
            q.options.map(item => {
                if (e.target.textContent === item.option && item.iscorrect) {
                    e.target.style.backgroundColor = '#3CB371';
                    e.target.style.color = '#fff';
                    e.target.style.borderColor = 'transparent';
                    this.setState((prevState) => ({ correctanswers: prevState.correctanswers + 1 }))
                } else {
                    if (e.target.textContent === item.option && !item.iscorrect) {
                        e.target.style.backgroundColor = '#cc0000';
                        e.target.style.color = '#fff';
                        e.target.className = "animate__animated animate__shakeX";
                        console.log('this is not correct')
                    }
                }
            })
        })
        setTimeout(() => {
            this.setState({ clicked: true })
            this.setState((prevState) => ({ index: prevState.index + 1, arrindex: prevState.arrindex + 1 }))
        }, 700)
    }

    returntostart = () => {
        this.setState({
            index: 0,
            arrindex: 0,
            clicked: false,
            correctanswers: 0
        })
    }

    movetheindex = (arr, t) => {
        let place = arr.indexOf(t);
        let newplace = place + 1;

        console.log(arr.indexOf([newplace]) + '--new laos')
    }

    render() {
        const numcorrect = this.state.correctanswers;
        const message = numcorrect < 2 ? 'Яка сумна новина! Спробуй ще раз!' : numcorrect > 1 && numcorrect < 3 ? 'Непогано, але можна краще!' : 'Ти добре постарався, продовжуй!'

        return (
            <>
                {showLessonHeader()}
                <div className="acc__container">
                    <div className="acc__inner">
                        <div className="title">Вступний урок</div>

                        <p className="suptitle">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quibusdam nisi, illum mollitia assumenda magni cupiditate consequuntur ut, dignissimos corrupti temporibus consequatur aperiam quasi adipisci?
                        </p>

                        <p className="suptitle">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, omnis nam? Sit eaque quas illum illo non provident saepe ipsum excepturi distinctio numquam, esse in cum eveniet quod. Obcaecati, delectus repudiandae in sit incidunt explicabo vel fugiat distinctio ad quibusdam?
                        </p>

                        <p className="suptitle">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit beatae a vitae corporis, maiores magni ea, vero atque quod delectus itaque exercitationem odio molestiae molestias unde voluptatibus consectetur quam incidunt. Assumenda sint quia suscipit totam aliquid reprehenderit optio accusantium fugit.
                        </p>

                        <div className="w-100 text-center post__img">
                            <img className="w-75" src={Post} alt="post img" />
                        </div>


                        <div className="title">
                            Вивчення слів
                        </div>

                        {this.state.index !== 6 ? thequestions.map(q => {
                            return (
                                <div className="question__container">
                                    {thequestions.indexOf(q) === this.state.index &&
                                        <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5 section">
                                            {console.log('you are at index number:-->' + this.state.index)}
                                            <div className="outer-square">
                                                <p className="question" style={{ textAlign: "center" }}>{q.question}</p>
                                                <p>{q.options.map(thing => {
                                                    return (
                                                        <p id="option" onClick={this.makeselection}>{thing.option}</p>
                                                    )
                                                })}</p>
                                            </div>
                                        </div>
                                    }
                                </div>
                            )
                        })
                            :
                            <div className="question__container">
                                <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5 endcard">
                                    <h2 className="theh2">{message}</h2>
                                    <p>Ти набрав {this.state.correctanswers} з {thequestions.length}</p>
                                    <button className="endbutton" onClick={this.returntostart}> Ще раз? </button>
                                </div>
                            </div>
                        }


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
        )
    }
}