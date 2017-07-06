import React, { Component } from 'react';

class HelloWorld extends Component {

    clickHandler = () => {
        alert("my name is " + this.props.name);
    };

    render(){
        return <div onClick={this.clickHandler}>{this.props.name} says: hello world component can click</div>;
    }
}

export default HelloWorld;