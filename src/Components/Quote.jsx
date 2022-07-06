import PropsTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({quote, author}) => {
	const [boxSize, setBoxSize] = useState({
		width: 0,
		height: 0
	});

	const refQuote = useRef();

	useLayoutEffect(() => {
		const {width, height} = refQuote.current.getBoundingClientRect();
		setBoxSize({
			width,
			height
		});
	}, [quote])

	return (
		<>
			<blockquote 
				className="blockquote text-end"
				style={{ display: 'flex' }}
			>
				<p 
					ref = { refQuote } 
					className="mb-1 mb-2"
				>
					{quote}
				</p>
				<footer className="blockquote-footer">{author}</footer>
			</blockquote>
			<h5>
				<code>
					{JSON.stringify(boxSize)}
				</code>
			</h5>
		</>
	)
}

Quote.propTypes = {
	quote: PropsTypes.string.isRequired,
	author: PropsTypes.string.isRequired
}