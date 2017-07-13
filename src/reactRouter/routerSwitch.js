import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';


const Index = () => (<h2>主页</h2>);

const Match = () => (<h3>匹配到当前页</h3>);

const RouterSwitch = () => (
    <div>
        <ul>
            <li><Link to="/routerSwitch">主页</Link></li>
            <li><Link to="/routerSwitch/old">重定向</Link></li>
            <li><Link to="/routerSwitch/new">当前页</Link></li>
            <li><Link to="/match">404</Link></li>
            <li><Link to="/hello/world">404</Link></li>
        </ul>
        <Switch>
            <Route path="/routerSwitch" exact component={Index}/>
            <Redirect from="/routerSwitch/old" to="/routerSwitch/new"/>
            <Route path="/routerSwitch/new" component={Match}/>
        </Switch>
    </div>
);

export default RouterSwitch;