import React, { Component } from 'react';
import Button from './componentInteractChild1';
import Dialog from './componentInteractChild2';
import './style/style.css';

class ComponentInteract extends Component{

    state = {
        loading: false,
        dialog: false,
        message: "hello world"
    };

    submit = () => {
        this.setState({loading: true});

        setTimeout(() => {
            const result = Math.random(1);
            if(result > 0.5){
                this.setState({
                    dialog: true,
                    message: '成功了'
                });
            }else{
                this.setState({
                    dialog: true,
                    message: '失败了'
                });
            }
        }, 1000);
    };

    close = () => {
        this.setState({
            dialog: false,
            loading: false
        });
    };

    render(){
        const { loading, dialog, message } = this.state;
        return (
            <div>
                <Button submit={ this.submit } loading={ loading }>确定</Button>
                { dialog && <Dialog message={ message } close={ this.close }/> }
            </div>
        );
    }
}

export default ComponentInteract;