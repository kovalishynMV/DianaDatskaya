import React, { Component } from 'react';

class Sendtext extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: ''
        }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        console.log('form is submitted');
    }

    handleEmailChange(event) {
        console.log('email was changed', this);
        this.setState({email: event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
            </form>
        );
    }
}

export default Sendtext;