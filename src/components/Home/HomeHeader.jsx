import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/img/logo-light.svg';

export default class HomeHeader extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src={logo}
                                width="100px"
                                className="d-inline-block align-top logo"
                            />

                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link className="nav__link" href="/">Головна</Nav.Link>
                            <Nav.Link className="nav__link" href="/courses">Курси</Nav.Link>
                            <Nav.Link className="nav__link" href="/blog">Блог</Nav.Link>
                            <Nav.Link className="nav__link" href="/contacts">Контакти</Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link className="align-self-end nav__link" href="/enter">Увійти</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}
  