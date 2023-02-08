import React from 'react';
import { checkGuess } from '../../game-helpers';

function Guess({ guess = '     ', answer }) {
  const checkedGuess = checkGuess(guess, answer);
  return (
    <p key={guess} className="guess">
      {checkedGuess.map(({ letter, status }, index) => (
        <span key={index} className={`cell ${letter !== ' ' ? status : ''}`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
