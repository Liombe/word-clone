import React, { useState } from 'react';

function GuessInput() {
  const [guess, setGuess] = useState('');

  const handleOnChange = (e) => {
    const nextGuess = e.target.value;
    if (nextGuess.length > 5) return;
    setGuess(e.target.value.toUpperCase());
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (guess.length !== 5) {
      alert('Your guess must be 5 letters long');
      return;
    }

    console.log({ guess });
    setGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleOnSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleOnChange}
      />
    </form>
  );
}

export default GuessInput;
