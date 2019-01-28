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

  handleGuessWord() {
    const { guessWord } = this.props;
    const { inputValue } = this.state;

    guessWord(inputValue);
  };

  render() {
    const { success } = this.props;
    const { inputValue } = this.state;

    const contents = success
      ? null
      : (
        <form className="form-inline">
          <div className="form-group">
            <input
              data-test="input-box"
              className="form-control"
              id="word-guess"
              type="text"
              placeholder="Enter guess.."
              onChange={this.handleInputChange}
              value={inputValue}
            />
            <button
              data-test="submit-button"
              className="btn btn-primary"
              type="submit"
              onClick={this.handleGuessWord}
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
