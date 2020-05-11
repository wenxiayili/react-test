import React from "react";
import { Route, Router, Redirect } from "react-router-dom";
import { useStore } from "reto";
import LoginStore from "../stores/login";

/**
 * 渲染路由
 * @param routers 路由数组
 */
export default function renderRouters(routers: any[]) {
  const loginStore = useStore(LoginStore);
  console.log('* renderRouters loginValue=', loginStore.loginValue);
  return routers.map((route, index) => {
    const { path, exact, routes, isRequiredLogin } = route;
    return (
      <Route
        key={"router" + index}
        exact={exact}
        path={path}
        // component={router.component} // 这种写法是错误的，对于嵌套路由不能回传参数
        render={(routeProps) => {
          if (isRequiredLogin && !loginStore.loginValue) {
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: routeProps.location },
                }}
              ></Redirect>
            );
          }
          return <route.component routes={routes} {...routeProps} />;
        }}
      ></Route>
    );
  });
}
