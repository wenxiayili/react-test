import React, { Component, } from 'react';

import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import { Test } from '../pages/test/test';
import { Simple } from '../pages/example/simple';

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Simple />
        </Route>

        <Route path="/test">
          <Test />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}