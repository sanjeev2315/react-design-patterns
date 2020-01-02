import React, { Component } from 'react';

export class CounterComponent extends Component {

	constructor(props) {
		super(props)
		this.state = {
			counter: 0
		}
	}

	updateCounter = (type) => {
		type === 'increment' ? this.setState({ counter: this.state.counter + 1 })
			: this.setState({ counter: this.state.counter - 1 })
	}
	render() {
		return this.props.render({ ...this.props, ...this.state, updateCounter: this.updateCounter })
	}
}

export default CounterComponent;
