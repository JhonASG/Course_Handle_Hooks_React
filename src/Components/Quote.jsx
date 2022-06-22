import PropsTypes from "prop-types";

export const Quote = ({quote, author}) => {
	return (
		<>
			<blockquote className="blockquote text-end">
				<p className="mb-1 mb-2">{quote}</p>
				<footer className="blockquote-footer">{author}</footer>
			</blockquote>
		</>
	)
}

Quote.propTypes = {
	quote: PropsTypes.string.isRequired,
	author: PropsTypes.string.isRequired
}