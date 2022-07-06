
export const FormAdd = ({ submitHomework, description, handleInputChange }) => {
    return (
        <>
            <form onSubmit = { submitHomework }>
                <input
                    type = "text"
                    name = "description"
                    value = { description }
                    placeholder = "¿Qué hay que hacer?"
                    className = "form-control"
                    onChange = { handleInputChange }
                />
                <button
                    type = "submit"
                    className="btn btn-outline-primary mt-2"
                >
                    Add Homework
                </button>
            </form>
        </>
    )
}
