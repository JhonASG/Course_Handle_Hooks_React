import { useHomework } from "../hooks/";
import { AddHomework, Homework } from "./";


export const HookReducer = () => {
    const {state, countHomework, pendingHomework, onNewHomework, deleteHomework, completeHomework} = useHomework();

    return (
        <>
            <h1 className = "mt-2 d-flex justify-content-between">
                List Homeworks: { countHomework }
                <span className = "align-self-center">Pendientes: { pendingHomework }</span>
            </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <Homework
                        state = { state }
                        deleteHomework = { deleteHomework }
                        completeHomework = { completeHomework }
                    />
                </div>
                <div className="col-5">
                    <h4>Add Homework</h4>
                    <hr/>
                    <AddHomework onNewHomework = { onNewHomework } />
                </div>
            </div>
        </>
    )
}
