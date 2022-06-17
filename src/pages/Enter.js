import React, { useState, initialState } from 'react';
import '../assets/js/regform';
import { Container, Nav } from 'react-bootstrap';
import Input from '../util/input/Input';

import { registration } from '../action/user';

const Enter = () => {
    const [email, setEmail] = useState(initialState);
    const [password, setPassword] = useState(initialState);

    return (
        <>
            <Container className="mt-4">
                <div class="frame">
                    <Nav className="enter__nav">
                        <ul>
                            <li class="signin-active"><a class="btn enter__btn">Sign in</a></li>
                            <li class="signup-inactive"><a class="btn enter__btn">Sign up </a></li>
                        </ul>
                    </Nav>

                    <div ng-app ng-init="checked = false">
                        <form class="form-signin" action="/" method="post" >
                            <label className="enter__label" for="email">Email</label>
                            <input value={email} setValue={setEmail} class="form-styling" type="email" name="email" id="login" autocomplete="off" required />

                            <label className="enter__label" for="pass">Password</label>
                            <input value={password} setValue={setPassword} class="form-styling" type="password" name="password" id="pass" autocomplete="off" required />

                            <div class="btn-animates">
                                <button href="/account" onClick={() => registration (email, password)} class="btn-animate" type="submit" >Авторизація</button>
                            </div>
                        </form>

                        <form class="form-signup" method="post" >
                            <label className="enter__label" for="first_name">Name</label>
                            <input class="form-styling" type="text" name="first_name" id="name" required/>

                            <label className="enter__label" for="last_name">Surname</label>
                            <input class="form-styling" type="text" name="last_name" id="surname" required/>

                            <label className="enter__label" for="email">Email</label>
                            <input class="form-styling" type="text" name="email" id="login" autocomplete="off" required />

                            <label className="enter__label" for="password">Password</label>
                            <input class="form-styling" type="password" name="password" id="password" autocomplete="off" required />

                            <label className="enter__label" for="confirm">Confirm password</label>
                            <input class="form-styling" type="password" name="confirm" autocomplete="off" required />

                            <label className="enter__label" for="group">Group</label>
                            <input class="form-styling" type="text" name="group" id="group" required />

                            <button class="btn-animate" type="submit" >Реєстрація</button>
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