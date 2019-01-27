import React, { Component } from 'react';
import { connect } from 'react-redux';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import {getSecretWord} from '../actions';

export class UnconnectedApp extends Component {
  componentDidMount() {
    const { getSecretWord } = this.props;
    getSecretWord();
  }

  render() {
    const { success, guessWords, secretWord } = this.props;

    return (
      <div className="container">
        <h1 className="text-center">Jotto</h1>
        <Congrats success={success} />
        <Input secretWord={secretWord} />
        <GuessedWords guessWords={guessWords} />
      </div>
    )
  }
}

const mapStateToProps = ({ success, guessWords, secretWord }) => ({
    success,
    guessWords,
    secretWord,
});

export default connect(mapStateToProps, ({ getSecretWord }))(UnconnectedApp);
