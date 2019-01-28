// libraries
import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// actions
import { guessWord } from '../actions';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };

    this.handleGuessWord = this.handleGuessWord.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    this.setState({ inputValue: target.value });
  }

  handleGuessWord(e) {
    e.preventDefault();

    const { guessWord } = this.props;
    const { inputValue } = this.state;

    if (!inputValue || (inputValue.length !== 5)) {
      return;
    }

    guessWord(inputValue);
  };

  render() {
    const { success } = this.props;
    const { inputValue } = this.state;

    const contents = success
      ? null
      : (
        <form className="form-inline" onSubmit={this.handleGuessWord}>
          <div className="form-group">
            <input
              data-test="input-box"
              className="form-control"
              id="word-guess"
              type="text"
              placeholder="Enter guess.."
              onChange={this.handleInputChange}
              value={inputValue}
              maxLength={5}
            />
            <button
              data-test="submit-button"
              className="btn btn-primary"
              type="button"
              onClick={this.handleGuessWord}
              disabled={!inputValue || (inputValue.length !== 5)}
            >
              Submit
            </button>
          </div>
        </form>
      );

    return (
      <div data-test="component-input">
        { contents }
      </div>
    );
  }
}

UnconnectedInput.propTypes = {
  success: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ success }) => ({ success });

export default connect(mapStateToProps, ({ guessWord }))(UnconnectedInput);
