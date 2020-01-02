import React, { useState } from 'react';

const useCounter = (type) => {
	const [count, setCounter] = useState(0)

	const updateCounter = (type) => {
		if (type === 'increment') {
			setCounter(prevCounter => prevCounter + 1)
		}
		if (type === 'decrement') {
			setCounter(prevCounter => prevCounter - 1)
		}
	}

	return [count, updateCounter]
}

export default useCounter


