import React from 'react';
import { checkLetter } from '../../game-helpers';

const QWERTY_LAYOUT = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function Keyboard({ guesses, answer }) {
  return (
    <div className="keyboard">
      {QWERTY_LAYOUT.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((keyLabel) => (
            <Key
              key={keyLabel}
              guesses={guesses}
              answer={answer}
              label={keyLabel}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function Key({ label, guesses, answer, ...props }) {
  const status = checkLetter(label, guesses, answer);
  return (
    <div className={`key cell ${status}`} {...props}>
      {label}
    </div>
  );
}

export default Keyboard;
