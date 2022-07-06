import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HooksApp } from '../src/Components'
import { ListHomework } from './Components/ListHomework'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <HooksApp /> */}
		<ListHomework />
	</React.StrictMode>
)