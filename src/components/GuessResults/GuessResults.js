import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <Guess key={index} guess={guess} answer={answer} />
      ))}

      {range(guesses.length, NUM_OF_GUESSES_ALLOWED).map((guess, index) => (
        <Guess key={index} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
