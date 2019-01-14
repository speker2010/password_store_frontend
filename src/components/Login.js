import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return <form className="login-form">
            <h2 className="login-form__headline">Login</h2>
            <p><input type="text" placeholder="Login"/></p>
            <p><input type="password" placeholder="Password"/></p>
            <p><input type="submit" value="Login"/></p>
        </form>;
    }
}
