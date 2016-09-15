/**
 * Empty Form ReactJS Component
 * @author Gonzalo Rubino gonzalo_rubino@artear.com
 * @version 1.0.12
 *
 * Use as: <EmptyForm insideForm={<ContentInside />} invalidFormAction="" submitValue="Publish it!" submitAction={this.submit}/>
 *
 * @param {String} formClass The desired class for the form
 * @param {Object} <ContentInside /> A class of ReactJS containing the elements that will be inside the form.
 * @param {Function} submitAction The method to call as a callback, when Submit button is pressed.
 * @param {Function} invalidFormAction When form is invalid, will call this action. Usefull to deactivate a submit button, for example.
 * @param {Function} validFormAction When form is valid, will call this action. Usefull to activate a submit button, for example.
 * @param {String} submitValue The label for the Submit button
 */
/* Based on: https://github.com/twisty/formsy-react-components/blob/gh-pages/playground/src/app.js */
'use strict';

import React from "react";
import Formsy from "formsy-react";
import FRC from "formsy-react-components";

const EmptyFormBase = React.createClass({
    mixins: [FRC.ParentContextMixin],

    propTypes: {
        children: React.PropTypes.node
    },

    render() {
        return (
            <Formsy.Form
               className={this.props.className}
               ref="empty_form"
               onSubmit={this.props.onSubmit}
               onInvalid={this.props.onInvalid}
               onValid={this.props.onValid}>

                {this.props.children}
            </Formsy.Form>
        );
    }
});


export default class EmptyForm extends React.Component {
    constructor(props) {
        super(props);

        // Default state
        this.state = {
            getclass: this.props.formClass
        };
    }

    changeOption(name, value) {
        var newState = {};
        newState[name] = value;
        this.setState(newState);
    };

    render() {
        return (
            <EmptyFormBase onSubmit={this.props.submitAction}
                onInvalid={this.props.invalidFormAction}
                onValid={this.props.validFormAction}
                ref="empty_form"
                className={this.state.getclass}>
                    {this.props.insideForm}
                <input className="btn btn-primary" type="submit" defaultValue={this.props.submitValue}/>
            </EmptyFormBase>
        );
    }
};
