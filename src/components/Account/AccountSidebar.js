import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import logo from '../../assets/img/logo-light.svg';
// eslint-disable-next-line
import accsvg from '../../assets/img/account-menu.svg'; // eslint-disable-next-line
import coursesvg from '../../assets/img/book.svg';

export default class AccountNavbar extends Component {
    render() {
        return (
            <>
                <Nav className="d-block bg-dark sidebar">
                    <img
                        alt="logo"
                        src={logo}
                        width="100px"
                        className="mx-auto d-block sidebar__logo"
                    />

                    <Nav.Link className="m-3 sidebar__link" href="/account">
                        <img className="sidebar__icon" src={accsvg} alt="" />
                        Мій акаунт
                    </Nav.Link>
                    <Nav.Link className="m-3 sidebar__link" href="/account/courses">
                        <img className="sidebar__icon" src={coursesvg} alt="" />
                        Мої курси
                    </Nav.Link>
                </Nav>
            </>
        );
    }
}