import React, { Component } from 'react';

export default class ProjectEditForm extends Component {
    render() {
        return (
            <form>
                <p><input type="text" placeholder="Название"/></p>
                <p><input type="submit" value="Сохранить"/></p>
            </form>
        );
    }
}
