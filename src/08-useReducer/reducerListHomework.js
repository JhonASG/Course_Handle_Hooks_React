let listHomework = [];

const reducerListHomework = ( initialState, action = {} ) => {
    const types = action.type;

    const actions = {
        ... initialState,
        '[Homework] add new homework': [... initialState, action.payload],
        '[Homework] delete homework': initialState.filter( homeworks => homeworks != action.payload),
        '[Homework] complete homework': initialState.map( h => {
            if (h == action.payload){
                return {
                    ... h,
                    done: !h.done
                }
            }
            return h;
        }),
        '[Homework] finish homework': []
    };

    return actions[types];
}

reducerListHomework( listHomework );

export { reducerListHomework, listHomework };