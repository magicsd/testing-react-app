import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterValue: 0,
      errorMessage: '',
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    const { errorMessage, counterValue: currentCounterValue } = this.state;

    const newState = { counterValue: currentCounterValue + 1 };

    if (errorMessage) {
      newState.errorMessage = '';
    }

    this.setState(newState);
  }

  handleDecrement() {
    const { counterValue: currentCounterValue } = this.state;

    if (currentCounterValue === 0) {
      this.setState({ errorMessage: 'The counter can not go below zero.' })
      return;
    }

    this.setState({
      counterValue: currentCounterValue - 1,
    });
  }

  render() {
    const { counterValue, errorMessage } = this.state;

    return (
      <div className="app" data-test="component-app">
        <h1 data-test="counter-display">
          The count is { counterValue }
        </h1>
        <button
          onClick={this.handleIncrement}
          data-test="increment-button"
        >
          Increment
        </button>
        <button
          data-test="decrement-button"
          onClick={this.handleDecrement}
        >
          Decrement
        </button>

        {errorMessage && (
          <p
            className="error-text"
            data-test="error-message"
          >
            { errorMessage }
          </p>
        )}

      </div>
    )
  }
}

export default hot(module)(App);
