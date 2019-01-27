import { storeFactory } from '../../test/testUtils';
import { guessWord } from '../actions'

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const wrongGuess = 'train';

  describe('No guessed words', () => {
    let store;
    const initialState = { secretWord };

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test('Updates state correctly for wrong guess', () => {
      store.dispatch(guessWord(wrongGuess));

      expect(store.getState()).toEqual({
        ...initialState,
        success: false,
        guessWords: [{ guessWord: wrongGuess, letterMatchCount: 3 }],
      });
    });

    test('Updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));

      expect(store.getState()).toEqual({
        ...initialState,
        success: true,
        guessWords: [{ guessWord: secretWord, letterMatchCount: secretWord.length }],
      });
    });
  });

  describe('Some guessed words', () => {
    const guessWords = [{ guessedWord: 'agile', letterMatchCount: 1}];
    const initialState = { guessWords, secretWord };
    let store;

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test('Updates state correctly for wrong guess', () => {
      store.dispatch(guessWord(wrongGuess));

      expect(store.getState()).toEqual({
        secretWord,
        success: false,
        guessWords: [...guessWords, { guessWord: wrongGuess, letterMatchCount: 3 }],
      })
    });

    test('Updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));

      expect(store.getState()).toEqual({
        secretWord,
        success: true,
        guessWords: [...guessWords, { guessWord: secretWord, letterMatchCount: secretWord.length }],
      })
    });
  });
});
