const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false
}]; //Esta inicial del reducer

const functionReducer = ( state = initialState, action = {} ) => {
    const types = action.type;

    const actions = {
        ... state,
        '[Homework] add new homework': [ ...state, action.payload ]
    }
    
    return actions[types];
}

let homeworks = functionReducer();

// New tarea
const newHomework = {
    id: 2,
    todo: 'Recolectar la gema del poder',
    done: false
};

// generamos una nueva acción encargada de agregar una nueva tarea
// type es para indicar la tarea realizada y payload para agregar la nueva tarea
const addActionState = {
    type: '[Homework] add new homework',
    payload: newHomework
};

// Ejecutamos la nueva acción en el reducer con el fin de obtener un nuevo estado
homeworks = functionReducer(homeworks, addActionState);

console.log(homeworks);