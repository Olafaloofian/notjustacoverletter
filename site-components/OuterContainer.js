import React, { Component } from 'react';
import Presentations from './Presentations'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './LandingPage'
import './main.css'

export default function OuterContainer() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route path='/:company' component={Presentations} />
            </Switch>
        </React.Fragment>
    )
}