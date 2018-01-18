import React from 'react';
import { BrowserRouter, Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import LoginPage from '../components/LoginPage';
import LandingPage from '../components/LandingPage';
import Navbar from '../components/Navbar';
import PageNotFound from '../components/PageNotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (

    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LandingPage} exact={true}></Route>
                <Route path="/home" component={Navbar}></Route>
                <Route component={PageNotFound}></Route>
            </Switch>
        </div>

    </Router>
);

export default AppRouter;