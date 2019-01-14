import React, { Component } from 'react';
import ProjectsList from "./ProjectsList";
import Search from "./Search";

export default class ProjectsListPage extends Component {
    render() {
        return <div className="projects-list-page">
            <h1>Проекты</h1>
            <div>
                <Search/>
            </div>
            <ProjectsList/>
        </div>
    }
}
