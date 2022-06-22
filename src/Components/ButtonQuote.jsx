
export const ButtonQuote = ({booleano, increment}) => {
    return (
        <>
            <button disabled={booleano} className="btn btn-primary" onClick={increment}>
                Next quote
            </button> 
        </>
    )
}
