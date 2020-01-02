import React from 'react';

const Counter = ({ counter, updateCounter }) => {
	return (
		<div>
			<button onClick={() => updateCounter('increment')}>Increment</button>
			{counter}
			<button onClick={() => updateCounter('decrement')}>decrement</button>
		</div>
	)
}

export default Counter;
