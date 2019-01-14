import React, { Component } from 'react';
import PasswordItem from "./PasswordItem";

export default class PasswordsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwords: [
                {
                    type: 'ftp',
                    login: 'admin',
                    password: 'qwerty'
                },
                {
                    type: 'ssh',
                    login: 'root',
                    password: 'qwerty'
                }
            ]
        }
    }


    render() {
        let passwords = this.state.passwords.map((elem, index) => {
            return <PasswordItem key={index} type={elem.type} login={elem.login} password={elem.password}/>;
        });
        return <div>
            {passwords}
        </div>
    }
}
