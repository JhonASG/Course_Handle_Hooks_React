// React no se importa porque esta de forma globall
import { Example } from "./Example"
import { CounterApp, CounterWithCustomHook } from "../01-useState"
import { SimpleForm, FormWithCostumHook } from "../02-useEffect"
import { MultipleCustomHooks } from "../03-Examples/MultipleCustomHooks"
import { FocusScreen } from "../04-useRef/FocusScreen"
import { Memorize } from "../05-memo/Memorize"
import { MemoHook } from "../05-memo/MemoHook"
import { CallbackHook } from "../06-useCallback/CallbackHook"
import { Padre } from "../07-tarea-memo-me/Padre"

const HooksApp = () => {
	return (
		<>
			<h1>HooksApp - Ejercicios Curso REACT UDEMY</h1>
			<Example />
			<CounterApp />
			<CounterWithCustomHook />
			<SimpleForm />
			<FormWithCostumHook />
			<MultipleCustomHooks />
			<FocusScreen />
			<Memorize />
			<MemoHook />
			<CallbackHook />
			<Padre />
		</>
	)
}

export {HooksApp}