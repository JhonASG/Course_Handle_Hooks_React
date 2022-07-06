import { useEffect, useReducer } from "react";
import { reducerListHomework, listHomework } from "../08-useReducer/reducerListHomework"

export const useHomework = () => {
    const init = () => (
        JSON.parse(localStorage.getItem('Homeworks')) || []
    );

    const [state, dispatch] = useReducer(reducerListHomework, listHomework, init);

    const countHomework = state.length;
    const pendingHomework = state.filter( homework => !homework.done).length;

    useEffect(() => {
        localStorage.setItem('Homeworks', JSON.stringify(state));
    }, [state])

    const onNewHomework = (duties) => {
        dispatch({
            type: '[Homework] add new homework',
            payload: duties
        });
    }

    const deleteHomework = (duties) => {
        dispatch({
            type: '[Homework] delete homework',
            payload: duties
        });
    }

    const completeHomework = (duties) => {
        dispatch({
            type: '[Homework] complete homework',
            payload: duties
        });
    }

    return ({
        state,
        countHomework,
        pendingHomework,
        onNewHomework,
        deleteHomework,
        completeHomework
    });
}