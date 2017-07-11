import React from 'react';
import { Route, Link, withRouter, Redirect } from 'react-router-dom'
import './style/auth.css';

const auth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 1000);
    },
    signOut(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 1000);
    }
};

auth.isAuthenticated = sessionStorage.getItem('username') ? true : false;

const LoginRegister = withRouter(({ history }) => (
    auth.isAuthenticated ? (
        <div className="nav-menu">
            欢迎您，{sessionStorage.getItem('username')}
            <button className="sign-out" onClick={() => {
                auth.signOut(() => {
                    sessionStorage.removeItem('username') ;
                    history.push('/auth/product');
                })
            }}>退出</button>
        </div>
    ) : (
        <div className="nav-menu">
            <Link to="/auth/login">登录</Link>
        </div>
    )
));

const Product = () => (<div>产品信息</div>);

const Account = ({history, location, match}) => {
    console.log(history);
    console.log(location);
    console.log(match);
    return (<div>个人信息</div>);
};

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ props =>(
        auth.isAuthenticated ? (
            //手动传递props
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/auth/login',
                state: {from : props.location}
            }}/>
        )
    )} />
);

class Login extends React.Component{

    state = {
        redirectToReferrer: false
    };

    loginHandler = () => {
        const username = this.refs.username.value,
              password = this.refs.password.value;

        if(!username){
            alert('请输入用户名');
            return;
        }

        if(!password){
            alert('请输入密码');
            return;
        }

        auth.authenticate(() => {
            sessionStorage.setItem('username', username);
            this.setState({redirectToReferrer: true});
        });
    };

    render (){
        console.log(this.props.location);
        const { from } = this.props.location.state || {from: '/auth/product'};

        //TODO 处理js内部跳转Redirect 其他方式？
        if(this.state.redirectToReferrer){
            return <Redirect to={from} />
        }

        return (
            <div>
                <h5>登录</h5>
                <div><input ref="username" placeholder="username"/></div>
                <div><input ref="password" placeholder="password"/></div>
                <div>
                    <button onClick={this.loginHandler}>login</button>
                </div>
            </div>
        );
    }
}

const Auth = () =>  (
    <div className="auth">
        <LoginRegister/>
        <ul>
            <li><Link to="/auth/product">产品列表</Link></li>
            <li><Link to="/auth/account">个人中心</Link></li>
        </ul>
        <div className="auth-container">
            <Route path="/auth/product" component={Product}/>
            <PrivateRoute path="/auth/account" component={Account} className="test"/>
            <Route path='/auth/login' component={Login}/>
        </div>
    </div>
);

export default Auth;