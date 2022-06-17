/*eslint-enable*/
import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import acc from '../../assets/img/account.svg';

export default class AccountHeader extends Component {
    render() {
        return (
            <>
                <Navbar bg="light">
                    <Container>
                        <Navbar.Brand></Navbar.Brand>
                        <Nav className="align-middle">
                            <Nav.Link className="acc__link" href="/dictionary">Словник</Nav.Link>
                            <Nav.Link className="acc__link" href="/">Головна</Nav.Link>
                            <Nav.Link href="/account">
                                <img
                                    src={acc}
                                    alt="photo"
                                    width="30px"
                                    className="d-inline-block align-middle acc__photo"
                                />
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}
/*eslint-enable*/