import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import logo from '../../assets/img/logo-light.svg';

class LessonSidebar extends Component {
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

                    <Nav.Link className="m-3 sidebar__link text-center" href="/">
                        Вступний урок
                    </Nav.Link>

                    <Nav.Link className="m-3 sidebar__link text-center" href="/">
                        Тема 1
                    </Nav.Link>
                    
                    <Nav.Link className="m-3 sidebar__link text-center" href="/">
                        Тема 2
                    </Nav.Link>
                    
                    <Nav.Link className="m-3 sidebar__link text-center" href="/">
                        Тема 3
                    </Nav.Link>
                </Nav>
            </>
        );
    }
}

export default LessonSidebar;