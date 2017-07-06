import React, { Component } from 'react';

class Switch extends Component{

    state = {
        open: true
    };

    clickHandler = () => { //TODO 箭头函数"绑定"this,外层函数
        this.setState({open: !this.state.open});
    };

    render(){
        return (<button onClick={this.clickHandler}>{this.state.open ? '关闭' : '打开'}</button>);
    }
}

export default Switch;

