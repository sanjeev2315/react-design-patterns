import React from 'react';
import useCounter from './useCounter.js'


const CustomCounter = () => {
	const [count, updateCounter] = useCounter();

	return (
		<div>
			<button onClick={() => updateCounter('increment')}>Increment</button>
			{count}
			<button onClick={() => updateCounter('decrement')}>decrement</button>
		</div>
	)
}

export default CustomCounter;
