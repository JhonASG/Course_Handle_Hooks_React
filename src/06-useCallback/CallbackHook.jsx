import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    const incrementCounter = useCallback(( num ) => {
        setCounter( (value) => value + num );
    }, []);

    return (
        <>
            <h1>useCallback Hook de React: { counter }</h1>
            <hr/>
            <ShowIncrement increment = { incrementCounter } />
        </>
    )
}
