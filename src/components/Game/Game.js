import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGameEndGameState } from '../../game-helpers';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [isGameOver, hasWon] = checkGameEndGameState(guesses, answer);

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        isGameOver={isGameOver}
      />
      {isGameOver && (
        <Banner
          type={hasWon ? 'happy' : 'sad'}
          guesses={guesses}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
