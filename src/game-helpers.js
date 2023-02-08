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

export function checkLetter(letter, guesses, answer) {
  let status = '';
  if (guesses.find((guess) => guess.includes(letter))) {
    guesses.forEach((guess) => {
      if (!guess.includes(letter)) return;

      const checkedGuess = checkGuess(guess, answer);
      const letterPositions = guess.split('').reduce((acc, char, index) => {
        if (char === letter) acc.push(index);
        return acc;
      }, []);

      letterPositions.forEach((position) => {
        const { status: nextStatus } = checkedGuess[position];
        if (
          (status === '' && nextStatus) ||
          (status === 'misplaced' && nextStatus === 'correct')
        ) {
          status = nextStatus;
        }
      });
    });
  }

  return status;
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
