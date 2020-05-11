import React, { useState } from "react";
import { useStore, Provider, } from "reto";
import LoginStore from '../../stores/login';
import { Link } from "react-router-dom";


export function Login() {
    return (
        <Test />
    );
}

function Test() {
    const loginStore = useStore(LoginStore);
    return (
        <div>
            用户名： 李运华
            <button onClick={loginStore.setLoginStatus}>点我登录</button> <br />
            <Link to='/simple'>点我跳转 </Link>

        </div>
    );
}
