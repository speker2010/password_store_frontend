import React, { Component } from 'react';
import ProjectEditForm from "./ProjectEditForm";

export default class ProjectEditPage extends Component {
    render() {
        return (
            <div>
                <h1>Редактирование проекта</h1>
                <ProjectEditForm/>
            </div>
        );
    }
}
