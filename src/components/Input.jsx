// libraries
import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// actions
import { guessWord } from '../actions';

class Input extends Component {
  render() {
    const { success } = this.props;

    const contents = success
      ? null
      : (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            id="word-guess"
            type="text"
            placeholder="Enter guess.."
          />
          <button
            data-test="submit-button"
            className="btn btn-primary"
            type="submit"
          >
            Submit
          </button>
        </form>
      );

    return (
      <div data-test="component-input">
        { contents }
      </div>
    );
  }
}

Input.propTypes = {
  success: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ success }) => ({ success });

export default connect(mapStateToProps, ({ guessWord }))(Input);
