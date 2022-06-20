import { useState } from "react";

//Genero un custom hook para poder reutilizar el contador en distintos componentes sin tener que crearlo
export const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    const reset = () => setCounter(initialValue);

    return {
        counter,
        increment,
        decrement,
        reset
    };
}