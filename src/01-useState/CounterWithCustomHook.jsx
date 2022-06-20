import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter(10);

    return (
        <>
            <hr />
            <h1>Custom Hook for counter: {counter}</h1>
            <hr />
            <button className='btn btn-primary' onClick={ increment }>More</button>
            <button className='btn btn-primary' onClick={ reset }>Reset</button>
            <button className='btn btn-primary' onClick={ decrement }>Less</button>
        </>
    )
}
