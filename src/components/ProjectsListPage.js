import React, { Component } from 'react';
import ProjectsList from "./ProjectsList";
import Search from "./Search";
import AddButton from "./AddButton";


export default class ProjectsListPage extends Component {
    render() {
        return <div className="projects-list-page container">
            <h1>Проекты</h1>
            <div>
                <Search/>
            </div>
            <ProjectsList/>
            <AddButton/>
        </div>
    }
}
