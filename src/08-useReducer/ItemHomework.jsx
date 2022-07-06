
export const ItemHomework = ({ homework = {}, deleteHomework, completeHomework }) => {
    return (
        <>
            <li className = "list-group-item d-flex justify-content-between">
                <span
                    className = {`align-self-center ${homework.done ? "text-decoration-line-through" : ''}`}
                    onClick = { () => completeHomework( homework ) }
                >
                    {homework.description}
                </span>
                <button
                    className = "btn btn-danger m-2"
                    onClick = { () => deleteHomework( homework ) }
                >
                    Delete
                </button>
            </li>
        </>
    )
}
