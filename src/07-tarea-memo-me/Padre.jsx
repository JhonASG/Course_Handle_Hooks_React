import { useCallback, useState } from "react";
import { Hijo } from "./Hijo"

export const Padre = () => {
    const number = [2, 4, 6, 8, 10];
    const [counter, setCounter] = useState(0);

    const incrementCounter = useCallback((num)=>{
        setCounter(value => value + num);
    }, []);

    return (
        <>
            <h1 className = "mt-2"> Padre </h1>
            <h5> Total: { counter } </h5>
            <hr />
            {
                number.map(n => {
                    return (
                        <Hijo 
                            key = {n}
                            increment = {incrementCounter}
                            numero = {n}
                        />
                    )
                })
            }
        </>
    );
}
