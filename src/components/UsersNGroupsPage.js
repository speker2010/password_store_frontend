import React, { Component } from 'react';
import UsersNGroups from "./UsersNGroups";

export default class UsersNGroupsPage extends Component {
    render() {
        return (
            <div>
                <h1>Пользователи и группы</h1>
                <UsersNGroups/>
            </div>
        );
    }
}
