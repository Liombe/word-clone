import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess/Guess';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <Guess key={index} guess={guess} />
      ))}

      {range(guesses.length, NUM_OF_GUESSES_ALLOWED).map((guess, index) => (
        <Guess key={index} />
      ))}
    </div>
  );
}

export default GuessResults;
