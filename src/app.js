import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const App = (props) => {
    return (
        <div>
            <ul className="url-list">
                <li><NavLink to="/" activeClassName="selected" exact >index</NavLink></li>
                <li><NavLink to="/simpleComponent" activeClassName="selected">simple component</NavLink></li>
                <li><NavLink to="/inheritComponent" activeClassName="selected">inherit component</NavLink></li>
                <li><NavLink to="/state" activeClassName="selected">state</NavLink></li>
                <li><NavLink to="/ref" activeClassName="selected">ref</NavLink></li>
                <li><NavLink to="/componentLifecycle" activeClassName="selected">ComponentLifecycle</NavLink></li>
                <li><NavLink to="/componentInteract" activeClassName="selected">ComponentInteract</NavLink></li>
                <li><NavLink to="/asyncComponent" activeClassName="selected">AsyncComponent</NavLink></li>
                <li><NavLink to="/higherOrder" activeClassName="selected">HigherOrder</NavLink></li>
                <li><Link to="/productFilter">product filter</Link></li>
                <li><Link to="/form">form</Link></li>
                <li>
                    <h4>react router4.0</h4>
                    <ul>
                        <li><Link to="/urlParam/1">UrlParam</Link></li>
                        <li><Link to="/innerRoute">Inner Route</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/auth">Auth</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/routerSwitch">switch => 404</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/routerConfig">router config</Link></li>
                    </ul>
                </li>
            </ul>
            { props.children }
        </div>
    );
};

export default App;