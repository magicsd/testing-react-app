import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessWords }) => {
  let contents;

  if (!guessWords.length) {
    contents = (
      <h4 data-test="guess-instructions">
        Try to guess the secret word!
      </h4>
    );
  } else {
    contents = (
      <div data-test="guessed-words">
        <h3 className="text-center">Guessed Words</h3>
        <table className="table table-striped">
          <thead>
          <tr>
            <th>Guess</th>
            <th>Matching Letters</th>
          </tr>
          </thead>
          <tbody>
          { guessWords.map((word, index) => (
            <tr key={`${word.guessWord}-${index}`} data-test="guessed-word">
              <td>
                { word.guessWord }
              </td>
              <td>
                { word.letterMatchCount }
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div data-test="component-guessed-words">
      { contents }
    </div>
  );
};

GuessedWords.propTypes = {
  guessWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
