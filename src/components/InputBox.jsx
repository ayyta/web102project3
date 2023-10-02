import { useState } from "react";

const InputBox = () => {
  return (
    <div className="input-container">
      <label class="input-title" for="guess">Guess:</label>
      <input class="input-text"></input>
      <button class="input-button"></button>
    </div>
  )


}

export default InputBox