import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks';

const iterationNumber = ( cycles ) =>{
    for (let i = 0; i < cycles; i++) {
        console.log('Aquí vamos...');        
    }

    return `${cycles} cycles done!`;
}

export const MemoHook = () => {
    const [show, setShow] = useState();
    const {counter, increment} = useCounter(5);
    // Solo al cambiar el counter que es la dependencia es que useMemo vuelve y memoriza el valor y renderiza la función o componente.
    const valueMemorize = useMemo(
        () => iterationNumber(counter), [counter]
    );

    return (
        <>
            <h1
            >
                Counter: <small> { counter } </small>
            </h1>
            <h4>
                { valueMemorize }
            </h4>
            <button
                className = 'btn btn-primary'
                onClick = {increment}
            >
                More
            </button>
            <button
                className = 'btn btn-outline-primary'
                onClick = { () => setShow(!show) }
            >
                Show/Hide: {JSON.stringify(show)}
            </button>
        </>
    );
}
