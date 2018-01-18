import React from 'react';
import { BrowserRouter, Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LandingPage from '../components/LandingPage';
import PortfolioDashboard from '../components/PortfolioDashboard';
import PageNotFound from '../components/PageNotFound';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (

    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LandingPage} exact={true}></Route>
                <Route path="/dashboard" component={PortfolioDashboard}></Route>
                <Route component={PageNotFound}></Route>
            </Switch>
        </div>

    </Router>
);

export default AppRouter;