import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test/testUtils';
import GuessedWords from '../components/GuessedWords';

const defaultProps = {
  guessWords: [{ guessWord: 'train', letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

describe('GuessedWords test', () => {
  test('Does not throw a warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
  });

  describe('If there are no words guessed', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup({ guessWords: [] });
    });

    test('Renders without errors', () => {
      const component = findByTestAttr(wrapper, 'component-guessed-words');
      expect(component.length).toBe(1);
    });

    test('Renders instructions to guess a word', () => {
      const guessInstructions = findByTestAttr(wrapper, 'guess-instructions');
      expect(guessInstructions.text()).toBeTruthy();
    });
  });

  describe('If there are words guessed', () => {
    const guessWords = [
      { guessWord: 'train', letterMatchCount: 3 },
      { guessWord: 'agile', letterMatchCount: 1 },
      { guessWord: 'party', letterMatchCount: 5 },
    ];

    let wrapper;

    beforeEach(() => {
      wrapper = setup({ guessWords })
    });

    test('Renders without errors', () => {
      const component = findByTestAttr(wrapper, 'component-guessed-words');
      expect(component.length).toBe(1);
    });

    test('Renders "guessed words" section', () => {
      const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
      expect(guessedWordsNode.length).toBe(1);
    });

    test('Renders correct number of guessed words', () => {
      const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
      expect(guessedWordsNodes.length).toBe(guessWords.length);
    });
  });
});
