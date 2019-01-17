import React from 'react';

const Congrats = ({ success }) => {
  if (!success) {
    return <div data-test="component-congrats" />
  }

  return (
    <div data-test="component-congrats">
      <span data-test="congrats-message">
        Congratulations! You guessed the word!
      </span>
    </div>
  );
};

export default Congrats;
