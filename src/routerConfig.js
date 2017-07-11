import React from 'react';
import { Route, Link } from 'react-router-dom';

const RouteWithSubRoutes = ({path, component: Component, routes, ...rest}) => (
    <Route path={path} {...rest} render={({ ...props }) => (
        <Component routes={routes} {...props} />
    )}/>
);

const generatorRoute = (routes) => (
    routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
    ))
);

const Fruit = ({routes}) => (
    <div style={{marginTop: '20px'}}>
        <ul>
            <li><Link to="/routerConfig/fruit/apple">苹果</Link></li>
            <li><Link to="/routerConfig/fruit/origin">橙子</Link></li>
        </ul>
        { generatorRoute(routes) }
    </div>
);

const Origin = () => (<h4>this is origin</h4>);

const Apple = () => (<h4>this is apple</h4>);

const House = () => (<h4>this is house</h4>);

const routes = [
    {
        path: '/routerConfig/fruit',
        component: Fruit,
        routes: [
            {
                path: '/routerConfig/fruit/origin',
                component: Origin
            },
            {
                path: '/routerConfig/fruit/apple',
                component: Apple
            }
        ]
    },
    {
        path: '/routerConfig/house',
        component: House
    }
];

const RouterConfig = () => (
    <div>
        <ul>
            <li><Link to="/routerConfig/fruit">水果</Link></li>
            <li><Link to="/routerConfig/house">房子</Link></li>
        </ul>
        { generatorRoute(routes) }
    </div>
);

export default RouterConfig;