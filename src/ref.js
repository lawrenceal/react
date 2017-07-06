import React, { Component } from 'react';

class SyncValue extends Component{

    changeHandler = () => {
        this.refs.target.value = this.refs.source.value;
    };

    refCallBack = (ele) => { //TODO render执行一次就执行一次
        console.log(ele)
    };

    render(){
        return (<div><input type="text" onChange={this.changeHandler} ref="source" placeholder="同步"/>
            <input type="text" ref="target" readOnly="readOnly" placeholder="同步"/>
            <input type="text" ref={this.refCallBack} className="callback"/></div>);
    }
}

export default SyncValue;