import React, { Component } from 'react';
import './CheckBox.css';

export default class CheckBox extends Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        let newState = !this.props.value;
        if (typeof this.props.onClick !== "undefined" && this.props.disabled !== true)
            this.props.onClick(newState);
    };

    render() {
        let additionalClassName =  (typeof this.props.className !== "undefined" ? " " + this.props.className + " " : " ");
        let disableClassName = (typeof this.props.disabled !== "undefined" && this.props.disabled ? ' CheckBox-disabled ': '');
        let statusClassName = (this.props.value ? ' CheckBox-on' : ' CheckBox-off') + 
            (this.props.background === false ? "-no-background ": " ");

        return (
            <div 
                className={"CheckBox" + additionalClassName + disableClassName + statusClassName}
                onClick={this.onClick}>
                {typeof this.props.label === "undefined" ?
                    this.props.value ?
                        <i className="fas fa-check CheckBox-icon"/>
                        :
                        <i className="fas fa-times CheckBox-icon"/>
                    :
                    this.props.label
                }
            </div>
        );
    }
}