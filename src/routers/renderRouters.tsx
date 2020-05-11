import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import renderRouters from './routerUtils';

import routers from "./routers";

/**
 * 应用路由
 */
export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        {
          renderRouters(routers)
        }
      </Switch>
    </BrowserRouter>
  );
}
