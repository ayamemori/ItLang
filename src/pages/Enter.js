import React from 'react';
import '../assets/js/regform';
import { Container, Nav } from 'react-bootstrap';
import { login, signup } from '../action/user';

const Enter = props => {
    let use = React.createRef();
    function userClick() {
        console.log(use.current.value)
        return use.current.value;
    }

    let pass = React.createRef();
    function passClick() {
        console.log(pass.current.value)
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
        console.log(name.current.value)
        console.log(surname.current.value)
        console.log(username.current.value)
        console.log(email.current.value)
        console.log(password.current.value)
        console.log(confirm.current.value)
        console.log(group.current.value)
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
                                <div onClick={() => login(userClick(), passClick())} class="btn-animate">Авторизація</div>
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