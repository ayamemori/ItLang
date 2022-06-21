/*eslint-enable*/
import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class LessonHeader extends Component {
    render() {
        return (
            <>
                <Navbar bg="light">
                    <Container>
                        <Navbar.Brand></Navbar.Brand>
                        <Nav className="align-middle">
                            <Nav.Link className="acc__link m-1" href="/blog">Блог</Nav.Link>
                            <Nav.Link className="acc__link m-1" href="/account/courses">Мої курси</Nav.Link>
                            <Nav.Link className="acc__link m-1" href="/dictionary">Словник</Nav.Link> 
                            <Nav.Link className="acc__link m-1" href="/account">Мій акаунт</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}
/*eslint-enable*/