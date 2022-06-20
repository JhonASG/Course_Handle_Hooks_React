import { useEffect, useState } from "react"

export const Message = () => {
    const [coords, setCoords] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleMouseMove = ({x, y}) => {
            setCoords({x, y});
        }

        // Se monta el componente
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            // Cuando el componente se desmonta se genera la limpieza del mismo
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return (
        <>
            <p>¡Usuario existente!</p>
            {JSON.stringify(coords)}
        </>
    )
}
