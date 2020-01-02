import React from 'react';

const withCounter = Component =>
	class HOC extends React.Component {
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
			return <Component  {...this.props} {...this.state} updateCounter={this.updateCounter} />
		}

	}

export default withCounter;
