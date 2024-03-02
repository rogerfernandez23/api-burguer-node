import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Requests from './pages/Requests';

 function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>;
                <Route exact path='/requests' component={Requests}/>;
            </Switch>
        </Router>
    )
};

export default Routes;