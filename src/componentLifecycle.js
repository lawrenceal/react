import React, { Component } from 'react';

class LifeCycle extends Component {

    state = {
        value: 1
    };

    componentWillMount(){
        console.log('will mount');
        console.log(this.refs);
    }

    componentDidMount(){
        console.log('did mount');
        console.log(this.refs);
    }

    componentWillUpdate(){
        console.log('will update');
        console.log(this.refs);
    }

    componentDidUpdate(){
        console.log('will mount');
        console.log(this.refs);
    }

    componentWillUnmount(){
        console.log('will unmount');
        console.log(this.refs);
    }

    add = () =>{
        this.setState({value: this.state.value + 1}); // TODO destroy component ?
    };

    render(){
        return (<div><input type="text" value={this.state.value} readOnly="readOnly"/>
            <button ref="button" onClick={this.add}>click +1</button></div>);
    }
}

export default LifeCycle;