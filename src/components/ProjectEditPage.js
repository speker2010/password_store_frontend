import React, { Component } from 'react';
import ProjectEditForm from "./ProjectEditForm";

export default class ProjectEditPage extends Component {
    render() {
        return (
            <div>
                <h1>Редактирование проекта</h1>
                {this.props.match.params.id}
                <ProjectEditForm/>
                <h2>Пользователи </h2>
                <h2>Группы</h2>
            </div>
        );
    }
}
