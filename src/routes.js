import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';

export default function() {
    return (
        <Switch>
            <Route exact path="/:id?" component={App} />
        </Switch>
    )
}