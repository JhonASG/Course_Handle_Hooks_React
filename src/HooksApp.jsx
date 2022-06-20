// React no se importa porque esta de forma globall
import { Example } from "./Example"
import { CounterApp, CounterWithCustomHook } from "./01-useState/"
import { SimpleForm, FormWithCostumHook } from "./02-useEffect"

const HooksApp = () => {
	return (
		<>
			<h1>HooksApp - Ejercicios Curso REACT UDEMY</h1>
			<Example />
			<CounterApp />
			<CounterWithCustomHook />
			<SimpleForm />
			<FormWithCostumHook />
		</>
	)
}

export default HooksApp