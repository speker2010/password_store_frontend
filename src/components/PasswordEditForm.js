import React, { Component } from 'react';

export default class PasswordEditForm extends Component {
    render() {
        return <form>
            <p><input type="text" placeholder="Тип"/></p>
            <p><input type="text" placeholder="Логин"/></p>
            <p><input type="text" placeholder="Пароль"/></p>
            <p><input type="submit" value="Сохранить"/></p>
        </form>;
    }
}
