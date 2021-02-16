import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainHome from './pages/MainHome/MainHome';
import AdmLogin from './pages/Login/AdmLogin';
import AdmHome from './pages/AdmHome/AdmHome';
import UserLogin from './pages/Login/UserLogin';
import UserHome from './pages/UserHome/UserHome';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainHome} />
                <Route path="/admLogin" exact component={AdmLogin} />
                <Route path="/admHome" exact component={AdmHome} />
                <Route path="/userLogin" exact component={UserLogin} />
                <Route path="/userHome" exact component={UserHome} />

            </Switch>
        </BrowserRouter>
    );
}