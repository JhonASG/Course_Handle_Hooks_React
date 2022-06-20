import { useForm } from "../hooks/useForm";

export const FormWithCostumHook = () => {
    const { form, handleInputChange, onResetForm } = useForm({
        Nombre: "",
        Email: "",
        Password: ""
    });

    const { Nombre, Email, Password } = form;

    return (
        <>
            <h1 className="mt-2">
                Formulario con Custom Hook
            </h1>
            <hr/>
            <form className="m-2 w-100">
                <input 
                    className="form-control"
                    type="text" 
                    name="Nombre" 
                    placeholder="Nombre" 
                    value={Nombre} 
                    onChange={handleInputChange} 
                />
                <input 
                    className="form-control mt-2 mb-2"
                    type="email" 
                    name="Email" 
                    placeholder="email@gmail.com"
                    value={Email}
                    onChange={handleInputChange}
                />
                <input
                    className="form-control"
                    type="password"
                    name="Password"
                    placeholder="Password"
                    value={Password}
                    onChange={handleInputChange}
                />
            </form>
            <button onClick={ onResetForm } className="btn btn-primary m-2 w-100">Reset</button>
        </>
    )
}
