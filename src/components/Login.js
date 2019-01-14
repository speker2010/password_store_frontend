import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";

export default class Login extends Component {
    render() {
        return <form className="login-form">
            <Typography variant="h4">Login</Typography>
            <p><TextField label="Login" required={true} /></p>
            <p><TextField label="Password" required={true} type="password" /></p>
            <p><Button variant="contained" color="primary">Login</Button></p>
        </form>;
    }
}
