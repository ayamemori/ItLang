import React from 'react';
import '../assets/js/regform';
import { Container, Nav } from 'react-bootstrap';
import { login, signup } from '../action/user';

const Enter = props => {
    let use = React.createRef();
    function userClick() {
        return use.current.value;
    }

    let pass = React.createRef();
    function passClick() {
        return pass.current.value;
    }

    let name = React.createRef();
    let surname = React.createRef();
    let username = React.createRef();
    let email = React.createRef();
    let password = React.createRef();
    let confirm = React.createRef();
    let group = React.createRef();
    function signUpClick() {
        return [
            name.current.value,
            surname.current.value,
            username.current.value,
            email.current.value,
            password.current.value,
            confirm.current.value,
            group.current.value
        ]
    }

    return (
        <>
            <Container className="mt-4">
                <div className="frame">
                    <Nav className="enter__nav">
                        <ul>
                            <li className="signin-active"><a class="btn enter__btn">Sign in</a></li>
                            <li className="signup-inactive"><a class="btn enter__btn">Sign up </a></li>
                        </ul>
                    </Nav>

                    <div ng-app ng-init="checked = false">
                        <form className="form-signin">
                            <label className="enter__label" for="email">Email</label>
                            <input ref={use} class="form-styling" type="username" name="username" id="username" autoComplete="off" required />

                            <label className="enter__label" for="pass">Password</label>
                            <input ref={pass} class="form-styling" type="password" name="password" id="password" autoComplete="off" required />

                            <div className="btn-animates">
                                <a href="/account"><div onClick={() => login(userClick(), passClick())} class="btn-animate"> Авторизація</div></a>

                            </div>
                        </form>



                        <form class="form-signup">
                            <label className="enter__label" for="first_name">Name</label>
                            <input ref={name} className="form-styling" type="text" name="first_name" id="name" required />

                            <label className="enter__label" for="last_name">Surname</label>
                            <input ref={surname} className="form-styling" type="text" name="last_name" id="surname" required />

                            <label className="enter__label" for="username">Surname</label>
                            <input ref={username} className="form-styling" type="text" name="username" id="username" required />

                            <label className="enter__label" for="email">Email</label>
                            <input ref={email} className="form-styling" type="text" name="email" id="login" autocomplete="off" required />

                            <label className="enter__label" for="password">Password</label>
                            <input ref={password} className="form-styling" type="password" name="password" id="password" autocomplete="off" required />

                            <label className="enter__label" for="confirm">Confirm password</label>
                            <input ref={confirm} className="form-styling" type="password" name="confirm" autocomplete="off" required />

                            <label className="enter__label" for="group">Group</label>
                            <input ref={group} className="form-styling" type="text" name="group" id="group" required />

                            <div onClick={() => signup(signUpClick())} className="btn-animate" type="submit" >Реєстрація</div>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Enter;
/*eslint-enable*/