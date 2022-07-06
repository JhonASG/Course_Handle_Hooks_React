import PropTypes from 'prop-types';
import { memo } from 'react';

export const SmallCounter = memo(({ value }) => {
	console.log("Goku SSJ3 vs Giren")

	return (
		<>
			<small> { value } </small>
		</>
	)
})

SmallCounter.propTypes = {
	value: PropTypes.number.isRequired
}