import { useState } from "react";

export const CounterApp = () => {
    const [count, setCount] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const { counter1, counter2, counter3 } = count;

    const handleButton = () => {
        setCount({
            ... count,
            counter1: counter1 + 1
        });
    }

    return (
    <>
        <h1>CounterApp: { counter1 }</h1>
        <h1>CounterApp: { counter2 }</h1>
        <h1>CounterApp: { counter3 }</h1>
        <hr />
        <button onClick={ handleButton }>More</button>
    </>
    )
}
