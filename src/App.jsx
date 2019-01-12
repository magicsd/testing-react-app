import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      counterValue: 0,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.setState({
      counterValue: this.state.counterValue + 1,
    });
  }

  render() {
    const { counterValue } = this.state;
    return (
      <div className="app">
        <h1>
          The count is { counterValue }
        </h1>
        <button onClick={this.handleIncrement}>
          Increment counter
        </button>
      </div>
    )
  }
}

export default hot(module)(App);
