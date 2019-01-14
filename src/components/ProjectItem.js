import React, { Component } from 'react';

export default class ProjectItem extends Component {
    render() {
        return <div className="project-item">
            <strong>Имя:</strong> {this.props.name}
        </div>
    }
}
