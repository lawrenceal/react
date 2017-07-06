import React from 'react';
import HigherOrder from './higherOrderComponent';

class Basic extends React.Component{
    componentDidMount(){
        console.log('name = ' + this.props.name);
    }

    render(){
        return (<div className={ this.props.name } >{ this.props.children }</div>);
    }
}

export default HigherOrder(Basic);