import { getLetterMatchCount } from '../helpers';

describe('Helpers test', () => {
  describe('getLetterMatchCount', () => {
    const secretWord = 'party';

    test('Returns correct count when no matching letters', () => {
      const letterMatchCount = getLetterMatchCount('bones', secretWord);
      expect(letterMatchCount).toBe(0);
    });

    test('Returns correct count when 3 matching letters', () => {
      const letterMatchCount = getLetterMatchCount('train', secretWord);
      expect(letterMatchCount).toBe(3);
    });

    test('Returns correct count when 3 duplicate letters in the guess', () => {
      const letterMatchCount = getLetterMatchCount('parka', secretWord);
      expect(letterMatchCount).toBe(3);
    });
  });
});
