import React, { Component } from 'react';

export default class PasswordItem extends Component {
    render() {
        return <div>
            <strong>Тип</strong>: {this.props.type}
            <strong>Логин</strong>: {this.props.login}
            <strong>Пароль</strong>: {this.props.password}
        </div>
    }
}
