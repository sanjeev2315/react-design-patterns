import React from 'react';
import './App.css';
import Counter from './counter'
import withCounter from './withCounter'

const App = withCounter(Counter)

export default App;
