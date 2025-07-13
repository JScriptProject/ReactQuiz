import React from "react";
import Answer from "./Answer";
function Question({currentQuestion, selectedQuestionIndex}) {
  return (
    <div id="question">
      <h2>{currentQuestion}</h2>.
      <Answer key={selectedQuestionIndex} />
      {/* <Answer
        key={selectedQuestionIndex}
        selectedQuestionIndex={selectedQuestionIndex}
        answerState={answerState}
        QUESTION={QUESTION}
        handleSelectAnswer={handleSelectAnswer}
        selectedAnswer={selectedAnswer}
      /> */}
    </div>
  );
}

export default Question;
