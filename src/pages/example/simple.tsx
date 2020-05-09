import React, { useState } from 'react';
import { Provider, useStore } from 'reto';
//import { func } from 'prop-types';

// import style
import './simple.scss';

function FooStore() {
    const [counter, setCounter] = useState(0);
    function reset() {
        setCounter(0);
    }

    return {
        counter,
        setCounter,
        reset,
    };
}

export function Simple() {
    return (
      <Provider of={FooStore}>
          <App />
      </Provider>
    )
}

function App() {
    const fooStore = useStore(FooStore);
    function changeStore() {
        fooStore.setCounter(fooStore.counter);
    }

    return (
        <div className="simple">
            {fooStore.counter}
            <button onClick={fooStore.reset}>Reset</button>
        </div>
    )
}

