import { NUM_OF_GUESSES_ALLOWED } from './constants';

export function checkGuess(guess, answer) {
  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.split('');

  return guessChars.map((guessChar, index) => {
    const answerChar = answerChars[index];

    let status;
    if (guessChar === answerChar) {
      status = 'correct';
    } else if (answerChars.includes(guessChar)) {
      status = 'misplaced';
    } else {
      status = 'incorrect';
    }
    return {
      letter: guessChar,
      status,
    };
  });
}

export function checkGameEndGameState(guesses, answer) {
  if (guesses[guesses.length - 1] === answer) {
    return [true, true];
  }

  if (guesses.length < NUM_OF_GUESSES_ALLOWED) {
    return [false, false];
  } else {
    return [true, false];
  }
}
