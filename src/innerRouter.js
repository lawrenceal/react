import React from 'react';
import {Route, Link} from 'react-router-dom';

const InnerRouterDetail = ({ match }) => (<div><h1>inner router detail id = {match.params.id}</h1></div>);

const InnerRouter = ({ match }) => (
    <div>
        <h2>inner router</h2>
        <Route path={`${match.url}/:id`} component={InnerRouterDetail}/>
        <Link to={`${match.url}/2`}>inner router detail</Link>
    </div>
);

export default InnerRouter;