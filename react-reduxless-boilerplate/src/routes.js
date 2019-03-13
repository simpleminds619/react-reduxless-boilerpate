import { Route, Switch, Router } from 'react-router';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About/about.page';
import ContactPage from './Pages/Contact/contact.page';
import React, { Component } from 'react';
import {createBrowserHistory} from 'history';

const hist = createBrowserHistory();

class AppRoute extends Component {
    render() {
        return (
            <Router history={hist}>
                <Switch>
                    <Route path="/" exact={true} component={HomePage} />
                    <Route path="/about" exact={true} component={AboutPage} />
                    <Route path="/contact" exact={true} component={ContactPage} />
                </Switch>
            </Router>
        );
    }
}

export default AppRoute;


