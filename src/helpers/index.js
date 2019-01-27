export const getLetterMatchCount = (guessedWord, secretWord) => {
  const guessedLettersSet = new Set([...guessedWord.split('')]);
  const secretLettersSet = new Set([...secretWord.split('')]);
  return [...secretLettersSet].filter(letter => guessedLettersSet.has(letter)).length;
};
