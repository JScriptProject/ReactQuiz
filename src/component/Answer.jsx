import React, { useContext, useRef } from "react";
import { AnswerContext } from "./Quiz1.jsx";
function Answer() {
  const ansRef = useRef();
  const {
    selectedQuestionIndex,
    answerState,
    QUESTION,
    handleSelectAnswer,
    selectedAnswer,
  } = useContext(AnswerContext);

  if (!ansRef.current) {
    ansRef.current = [...QUESTION[selectedQuestionIndex].answers];
    ansRef.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {ansRef.current.map((answer) => {
        3;
        let cssClass = "";
        const isSelected = selectedAnswer[selectedAnswer.length - 1] === answer;
        if (answerState === "answered" && isSelected) {
          cssClass = "selected ";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
          console.log("inside another if");
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => handleSelectAnswer(answer)}
              className={cssClass}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Answer;
