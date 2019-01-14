import React, { Component } from 'react';

export default class UserConfig extends Component{
    render() {
        return <form>
            <p><input type="text" placeholder='Логин'/></p>
            <p><input type="text" placeholder='Имя'/></p>
            <p><input type="password" placeholder='Пароль'/></p>
            <p><input type="password" placeholder='Новый пароль'/></p>
            <p><input type="submit" value='Сохранить'/></p>
        </form>
    }
}
