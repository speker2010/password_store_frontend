import React, { Component } from 'react';
import '../b-modal.css';

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.toggle = this.toggle.bind(this);
        this.stopPropagation = this.stopPropagation.bind(this);
    }

    close() {
        this.setState({
            isOpen: false
        });
    }

    open() {
        this.setState({
            isOpen: true
        });
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    stopPropagation(e) {
        e.stopPropagation();
    }

    render() {
        let openClass = (this.state.isOpen) ? 'b-modal_open' : '';
        return <div className={'b-modal ' + openClass} onClick={this.close}>
            <div className='b-modal__modal' onClick={this.stopPropagation}>
                <div className="b-modal__close" onClick={this.close}>
                    x
                </div>
                Modal
            </div>
        </div>;
    }
}
