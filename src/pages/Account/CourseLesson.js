import React, { Component } from 'react';
import { showLessonHeader, showLessonSidebar } from '../../components/Account/AccountShow';
import { Button, Row, Col } from 'react-bootstrap';
import Lesson from '../../assets/img/lesson.jpg';

import { thequestions } from '../../assets/js/quiz';

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
                        <div className="title">Past Simple</div>

                        <div className="post__suptitle">
                            Стверджувальне речення
                        </div>

                        <p className="suptitle">
                            Past Simple (Past Indefinite) утворюється за допомогою використання форми минулого часу смислового дієслова. Якщо дія виражена правильним дієсловом, то його форма минулого часу утворюється за допомогою додавання закінчення -ed до його словникової форми. Якщо вживається неправильне дієслово, тоді використовується його друга форма з таблиці неправильних дієслів. Якщо потрібне дієслово відсутнє в таблиці, це означає, що воно правильне і минулий час утворюється за допомогою закінчення -ed. Форма минулого часу дієслова однакова для всіх осіб однини та множини (окрім дієслова to be).
                        </p>

                        <Row className='d-flex flex-row justify-content-evenly mt-2 mb-2'>
                            <Col className='col-5 coloftext'>
                                <p>She worked abroad. – Вона працювала за кордоном.</p>
                                <p>My uncle lived here. – Мій дядько жив тут.</p>
                                <p>Harry wrote a lot of books. – Гаррі написав багато книг.</p>
                            </Col>

                            <Col className='col-5 coloftext'>
                                <p>She was angry yesterday. – Вчора вона була розлюченою.</p>
                                <p>We were young and reckless. – Ми були молоді та безтурботні.</p>
                            </Col>
                        </Row>

                        <Row className='d-flex flex-row justify-content-evenly mt-4'>
                            <Col className="col-3 d-flex flex-column coloftext">
                                <p>to work → worked</p>
                                <p>to translate → translated</p>
                                <p>to agree → agreed</p>
                            </Col>

                            <Col className="col-3 d-flex flex-column coloftext">
                                <p>to study → studied</p>
                                <p>to play → played</p>
                            </Col>

                            <Col className="col-3 d-flex flex-column coloftext">
                                <p>to stop → stopped</p>
                                <p>to relax → relaxed</p>
                            </Col>
                        </Row>

                        <div className="post__suptitle">
                            Заперечне речення
                        </div>

                        <p className="suptitle">
                            Заперечення в Past Simple утворюється за допомогою допоміжного дієслова did та заперечної частки not після нього, що стоять після підмета та перед смисловим дієсловом. Did – це форма минулого часу допоміжного дієслова do. Did вживається для всіх осіб однини та множини.
                            Після did not смислове дієслово використовується в формі простого інфінітиву без частки to, тому що граматичний час в такому випадку виражається через допоміжне дієслово did.
                        </p>

                        <Row className='d-flex flex-row justify-content-evenly mt-2 mb-2'>
                            <Col className='col-5 coloftext'>
                                <p>She did not work abroad. – Вона не працювала за кордоном.</p>
                                <p>Harry did not write a lot of letters. – Гаррі не написав багато листів.</p>
                            </Col>

                            <Col className='col-5 coloftext'>
                                <p className='post__important'>Did not = didn’t (скорочення)</p>
                                <p>His uncle didn’t live here. – Його дядько не жив тут.</p>
                                <p>Your grandfather didn’t dance. – Твій дідусь не танцював.</p>
                            </Col>
                        </Row>

                        <p className="suptitle">
                            Заперечення з дієсловом to be в формі минулого часу (was, were) утворюється шляхом додавання частки not після was або were. Was та were не потребують допоміжних дієслів для утворення заперечного речення.
                        </p>

                        <Row className='d-flex flex-row justify-content-evenly mt-2 mb-2'>
                            <Col className='col-5 coloftext'>
                                <p>I was not angry yesterday. – Я не була злою вчора.</p>
                                <p>Kate and Jack were not here two day ago. – Кейт та Джек не були тут два дні тому.</p>
                            </Col>

                            <Col className='col-5 coloftext'>
                                <p className='post__important'>was not = wasn't (скорочення)</p>
                                <p className='post__important'>were not = weren't</p>
                                <p>Your grandfather didn’t dance. – Твій дідусь не танцював.</p>
                            </Col>
                        </Row>

                        <p className='post__suptitle'>
                            Питальне речення
                        </p>

                        <p>
                            Загальне питання в Past Simple утворюється за допомогою допоміжного дієслова did, що ставиться на початку речення перед підметом. Після підмета використовується смислове дієслово тільки в формі простого інфінітиву без частки to.
                        </p>

                        <Row className='d-flex flex-row justify-content-evenly mt-2 mb-2'>
                            <Col className='col-5 coloftext'>
                                <p>Did she work abroad? – Вона працювала за кордоном?</p>
                                <p>Did Harry write a lot of letters? – Гаррі писав багато листів?</p>
                            </Col>
                        </Row>

                        <p>
                            Спеціальне питання в Past Simple утворюється за допомогою питального слова або фрази, що ставиться на початок речення перед допоміжним дієсловом. Подальший порядок слів такий самий, як і в загальному питанні для Past Simple.
                        </p>

                        <Row className='d-flex flex-row justify-content-evenly mt-2 mb-2'>
                            <Col className='col-5 coloftext'>
                                <p>Where did she work? – Де вона працювала?</p>
                                <p>What did Harry write? – Що писав Гаррі?</p>
                                <p>When did he live here? – Коли він тут жив?</p>
                            </Col>
                        </Row>

                        <div className="w-100 text-center post__img">
                            <img className="w-75" src={Lesson} alt="post img" />
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

                        <Button href="/account/lesson/test" className="mt-5 orng__button" variant="warning">Перейти до тесту</Button>
                    </div>
                </div>
                {showLessonSidebar()}
            </>
        )
    }
}