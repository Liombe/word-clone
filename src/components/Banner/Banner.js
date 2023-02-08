import React from 'react';

function Banner({ type, guesses, answer, onRestart }) {
  return (
    <div className={`${type} banner`}>
      {type === 'happy' && (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guesses.length} guesses</strong>.
        </p>
      )}
      {type === 'sad' && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
      <button className="banner-restart" onClick={onRestart}>
        Restart Game
      </button>
    </div>
  );
}

export default Banner;
