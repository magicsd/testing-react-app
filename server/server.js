const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

const fileContents = fs.readFileSync('server/five-letter-words.json', 'utf-8');
const words = JSON.parse(fileContents);
const { fiveLetterWords } = words;

app.get('/', (req, res) => {
  const word = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];

  res.send(word);
});

if (!module.parent) {
  app.listen(7777, () => { console.log('Server is listening on port 7777')});
}

module.exports = app;
