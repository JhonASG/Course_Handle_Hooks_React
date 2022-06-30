import { useRef } from "react"

export const FocusScreen = () => {
	const ref = useRef();

	const onFocusInput = () => {
		ref.current.select();
	}

	return (
		<>
			<h1 className = 'm-2'>Focus Screen</h1>
			<hr />
			<input
				ref = { ref }
				type = 'text'
				placeholder = 'Ingrese su nombre'
				className = 'form-control' 
			/>
			<button 
				className = 'btn btn-primary mt-2'
				onClick = { onFocusInput }
			>
				Sign in
			</button>
		</>
	)
}
