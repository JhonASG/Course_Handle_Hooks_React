import { ItemHomework } from "./ItemHomework"

export const Homework = ({ state = [], deleteHomework, completeHomework }) => {
    return (
        <>
            <ul className = "list-group">
                {
                    state.map((homework) => (
                        <ItemHomework
                            key = { homework.id }
                            homework = { homework }
                            deleteHomework = { deleteHomework }
                            completeHomework = { completeHomework }
                        />
                    ))
                }
            </ul>
        </>
    )
}
