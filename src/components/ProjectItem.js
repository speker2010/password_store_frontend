import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProjectItem extends Component {
    render() {
        return <div className="project-item">
            <strong>Имя:</strong> {this.props.name}
            <Link to={`/project/${this.props.id}`}>
                Редактировать
            </Link>
        </div>
    }
}
