import React, { useState } from 'react';
import { Provider, useStore } from 'reto';
//import { func } from 'prop-types';

// import style
import './simple.scss';
import { useEffect } from 'react';

function FooStore() {
    const [counter, setCounter] = useState(1);
    useEffect(() => {
        console.log('* FooStore', counter);
    })
    function reset() {
        setCounter(counter + 1);
        setTimeout(() => {
            console.log('* FooStore', counter);
        })
    
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
          <SimpleApp />
      </Provider>
    )
}

function SimpleApp() {
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

