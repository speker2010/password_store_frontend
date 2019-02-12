import React, { Component } from 'react';
import ProjectItem from "./ProjectItem";

export default class ProjectsList extends Component {
    constructor(args) {
        super(args);
        this.state = {
            projects: [
                {
                    id:1,
                    name: 'project1'
                },
                {
                    id:2,
                    name: 'project2'
                },
                {
                    id:3,
                    name: 'project3'
                }
            ]
        }
    }

    render() {
        let projects = this.state.projects.map((elem, index) => {
            return <ProjectItem key={elem.id} name={elem.name} id={elem.id}/>
        });
        return <div className="projects-list">
            {projects}
        </div>
    }
}
