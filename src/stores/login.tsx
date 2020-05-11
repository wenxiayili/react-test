import { useState, useEffect } from 'react';
import { useStore } from 'reto';

export default function LoginStore() {
    const [loginValue, setLoginValue] = useState(false);

    useEffect(() => {
        console.log('* isLogin', loginValue);
    }, [loginValue]);

    function setLoginStatus() {
        setLoginValue(true);
        setTimeout(() => {
            console.log('* isLogin', loginValue);
        }, 1000);
    }

    return {
        loginValue,
        setLoginStatus,
        setLoginValue,
    }
}
