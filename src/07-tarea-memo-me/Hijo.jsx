import { memo } from "react"

export const Hijo = memo(({ increment, numero }) => {
    console.log("Hola soy Goku!!!");
    
    return (
        <>
            <button
                className="btn btn-primary mr-5"
                onClick={ () => increment(numero) }
            >
                { numero }
            </button>
        </>
    )
})