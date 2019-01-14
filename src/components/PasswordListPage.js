import React, { Component } from 'react';
import PasswordsList from "./PasswordsList";

export default class PasswordListPage extends Component {
    render() {
        return <div>
            <h1>Список паролей</h1>
            <p><strong>Проект:</strong>{this.props.projectName}</p>
            <PasswordsList/>
        </div>
    }
}
