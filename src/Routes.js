import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./features/home/screens/Home";
import { Events } from "./features/events/screens/Events";
import { Shows } from './features/shows/screens/Shows';
import { Membership } from './features/membership/screens/Membership';
import { Competitions } from './features/competitions/screens/Competitions';

export const Routes = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/events" exact component={Events}/>
            <Route path="/membership" exact component={Membership}/>
            <Route path="/shows" exact component={Shows}/>
            <Route path="/competitions" exact component={Competitions}/>
        </Switch>
    </BrowserRouter>
  )
}
