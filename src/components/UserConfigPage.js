import React, { Component } from 'react';
import UserConfig from "./UserConfig";

export default class UserConfigPage extends Component {
    render() {
        return (
            <div>
                <h1>Настройки пользователя</h1>
                <UserConfig/>
            </div>
        );
    }
}
