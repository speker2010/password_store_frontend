import React, { Component } from 'react';
import PasswordEditForm from "./PasswordEditForm";

export default class PasswordEditPage extends Component {
    render() {
        return (
            <div>
                <h1>Редактирование пароля</h1>
                <PasswordEditForm/>
            </div>
        );
    }
}
