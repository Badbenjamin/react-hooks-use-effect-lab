import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    setTimeout(() => setTimeRemaining((timeRemaining > 0) ? timeRemaining - 1 : timeRemaining), 1000);
    if (timeRemaining === 0) {
      return (
        onAnswered(false)
      )
    }
    console.log(timeRemaining)
    // return function clearTimeout() {
    //   clearInterval(setTimeRemaining)
    // }

  });

  // return function clearTimeout() {
  //   setTimeRemaining(10)
  // }




  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
