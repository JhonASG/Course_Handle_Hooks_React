import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const SimpleForm = () => {
    const { form, handleInputChange } = useForm({
        Nombre: "",
        Email: ""
    });

    const { Nombre, Email } = form;

    return (
        <>
            <h1 className="mt-2">Formulario Simple</h1>
            <hr/>
            <form>
                <input 
                    className="form-control" 
                    type="text" 
                    name="Nombre" 
                    placeholder="Nombre" 
                    value={Nombre}
                    onChange={handleInputChange}
                />
                { Nombre === 'Vegeta' && <Message /> }
                <input 
                    type="email" 
                    className="form-control mt-2" 
                    name="Email" 
                    placeholder="hola@gmail.com"
                    value={Email}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}
