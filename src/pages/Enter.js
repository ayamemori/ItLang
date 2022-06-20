import React from 'react';
import '../assets/js/regform';
import { Container, Nav } from 'react-bootstrap';
import { login } from '../action/user';

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
                            <input className="form-styling" type="text" name="first_name" id="name" required />

                            <label className="enter__label" for="last_name">Surname</label>
                            <input className="form-styling" type="text" name="last_name" id="surname" required />

                            <label className="enter__label" for="email">Email</label>
                            <input className="form-styling" type="text" name="email" id="login" autocomplete="off" required />

                            <label className="enter__label" for="password">Password</label>
                            <input className="form-styling" type="password" name="password" id="password" autocomplete="off" required />

                            <label className="enter__label" for="confirm">Confirm password</label>
                            <input className="form-styling" type="password" name="confirm" autocomplete="off" required />

                            <label className="enter__label" for="group">Group</label>
                            <input className="form-styling" type="text" name="group" id="group" required />

                            <button className="btn-animate" type="submit" >Реєстрація</button>
                        </form>
                    </div>


                    <div class="forgot">
                        <a href="#">Forgot your password?</a>
                    </div>

                </div>
            </Container>
        </>
    );
};

export default Enter;
/*eslint-enable*/