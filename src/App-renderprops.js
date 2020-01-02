import React from 'react';
import './App.css';
import CounterComponent from './CounterComponent';
import Counter from './counter'


function App() {
	return (
		<div className="App">

			{/* 1. Render Props Pattern */}
			<CounterComponent render={props => <Counter {...props} />} />

		</div>
	);
}

export default App;
