import { useState } from "react";
import { useCounter } from "../hooks"
import { SmallCounter } from "./SmallCounter";

export const Memorize = () => {
    const { counter, increment } = useCounter(10);
    const [ show, setShow ] = useState(false);
    
    return (
        <>
            <h1
                className = 'm-2'
            >
                Counter: <SmallCounter value = { counter }/>
            </h1>
            <button 
                className= 'btn btn-primary' 
                onClick={increment}
            >
                More
            </button>
            <button
                className = 'btn btn-outline-primary'
                onClick = {() => (setShow( !show ))}
            >
                Show/Hide: {JSON.stringify(show)}
            </button>
        </>
    )
}
