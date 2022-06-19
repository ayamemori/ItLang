import React, { Component, handleSelect, index } from 'react';
import Lottie from "lottie-react";
import { Button, Container, Carousel, Card, Row } from 'react-bootstrap';

import firstAnim from "../assets/lottie/firstAnim.json";
import secondAnim from "../assets/lottie/secondAnim.json";
import thirdAnim from "../assets/lottie/thirdAnim.json";
import fourthAnim from "../assets/lottie/fourthAnim.json";

import animationData from '../assets/lottie/firstAnim.json';

import EngZno from '../assets/img/engzno.png';

import { showHomeHeader, showHomeFooter } from '../components/Home/HomeShow';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            erorr: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("edu/get/courses")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.courses
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
        const { error, isLoaded, items } = this.state;

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };

        if (error) {
            return <p> Error {error.message}</p>
        } else if (!isLoaded) {
            return <p> Loading.. </p>
        } else {
            console.log({items})
            return (
                <>
                    {showHomeHeader()}
                    <Carousel className="main__carousel" activeIndex={index} onSelect={handleSelect} interval={3000}>
                        <Carousel.Item className="carousel__item1">
                            <Lottie className="anim" animationData={firstAnim} options={defaultOptions} />
                            <Carousel.Caption>
                                <h3>Англійська - це легко!</h3>
                                <Button className="learnmore__button" variant="outline-light">Learn More</Button>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className="carousel__item2">
                            <Lottie className="anim" animationData={secondAnim} />
                            <Carousel.Caption>
                                <h3>Вчити англійську - це продуктивно!</h3>
                                <Button className="learnmore__button" variant="outline-light">Learn More</Button>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className="carousel__item3">
                            <Lottie className="anim" animationData={thirdAnim} />
                            <Carousel.Caption>
                                <h3>Вчи англійську за власним графіком</h3>
                                <Button className="learnmore__button" variant="outline-light">Learn More</Button>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className="carousel__item4">
                            <Lottie className="anim" animationData={fourthAnim} />
                            <Carousel.Caption>
                                <h3>Вчи англійську вдома</h3>
                                <Button className="learnmore__button" variant="outline-light">Learn More</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>




                    <div className="parallax">
                        <div className="parallax__block">
                            <h1>Welcome to English Courses!</h1>
                        </div>
                    </div>



                    <Container>
                        <Row className="d-flex justify-content-evenly cards__row">
                            <Card className="col-sm-10 col-md-5 col-lg-4 cards">
                                <Card.Img
                                    // key={items.name}
                                    // src={items[0]['strDrinkThumb']}
                                    alt='EngForIT'
                                    position='top'
                                />

                                <Card.Body>
                                    {/* <Card.Title key={items.name}>
                                        {items[0]['course_name']}
                                    </Card.Title> */}
                                    {/* <Card.Text key={items.name}>
                                        {items[0]['strDrink']}
                                    </Card.Text> */}
                                    <Button href="/courses" className="orng__button" variant="warning">Детальніше</Button>
                                </Card.Body>
                            </Card>

                            <Card className="col-sm-10 col-md-5 col-lg-4 cards">
                                <Card.Img
                                    src={EngZno}
                                    alt='EngForIT'
                                    position='top'
                                />

                                <Card.Body>
                                    <Card.Title>Підготовка до ЗНО</Card.Title>
                                    <Card.Text>
                                        ЗНО - це завжди велика відповідальність, і не завжди легко підготуватись до нього самостійно. Якщо ти хочеш скласти іспит на усі 200 - тобі необхідний цей курс!
                                    </Card.Text>
                                    <Button className="orng__button" variant="warning">Детальніше</Button>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>

                    {showHomeFooter()}
                </>
            );
        }
    }
}
