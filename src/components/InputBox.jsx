import { useState } from "react";

const InputBox = (props) => {
  const [guess, setGuess] = useState('');
  const [correct, setCorrect] = useState(false);

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  }

  const handleClick = () => {
    if (guess.toLowerCase() === props.name.toLowerCase()) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  }

  return (
    <div className="input-container">
      <label class="input-title" for="guess">Guess:</label>
      <input class={`input-text ${correct ? 'highlight': ''}`} value={guess} onChange={handleInputChange}></input>
      <button class='input-button' onClick={handleClick}>Go!</button>
    </div>
  )
}

export default InputBox