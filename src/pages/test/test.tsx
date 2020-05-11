import React, { useState } from "react";
import { useStore, Provider, } from "reto";

function TestStore() {
    const [name, setName] = useState("李运华");

    function setNewName() {
        setName('不是李运华');
    }

    return {
        name,
        setName,
        setNewName,
    };
}

export function Test() {
    return (
        <Provider of={TestStore}>
            <TestApp />
        </Provider>
    );
}

function TestApp() {
    const testStore = useStore(TestStore);
    return (
        <div>
            我的名字是「{testStore.name}」
            <button onClick={testStore.setNewName}>eee</button>
        </div>
    );
}

