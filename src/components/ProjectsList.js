import React, { Component } from 'react';
import ProjectItem from "./ProjectItem";

export default class ProjectsList extends Component {
    constructor(args) {
        super(args);
        this.state = {
            projects: [
                {
                    name: 'project1'
                },
                {
                    name: 'project2'
                },
                {
                    name: 'project3'
                }
            ]
        }
    }

    render() {
        let projects = this.state.projects.map((elem, index) => {
            return <ProjectItem key={index} name={elem.name}/>
        });
        return <div className="projects-list">
            {projects}
        </div>
    }
}
