import React from 'react';
import './style/higherOrder.css';

function HigherOrder(Container){

    return class higherOrderComponent extends React.Component{
        componentDidMount(){
            console.log('className = ' + this.props.className );
            console.log('name = ' + this.props.name);
        }

        render(){
            return (<Container name='higherOrder'>{this.props.children}</Container>);
        }
    }
}

export default HigherOrder;