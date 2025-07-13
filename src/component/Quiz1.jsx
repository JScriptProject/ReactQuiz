import React, { useCallback, useState, createContext } from "react";
import QUESTION from "../questions.js";
import summaryImg from "../assets/quiz-complete.png";
import ProgressBar from "./ProgressBar.jsx";
import Question from "./Question.jsx";
export const AnswerContext = createContext();

 function Quiz1() {
  const [answerState, setAnswerState] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const selectedQuestionIndex =
    answerState === "" ? selectedAnswer.length : selectedAnswer.length - 1;

  // Handleselect function from here
  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(answer) {
      setAnswerState("answered");
      setSelectedAnswer((prev) => [...prev, answer]);

      //setting up if the answer was right or wrong after  1 second
      console.log("3 sec timer started");
      setTimeout(() => {
        if (answer === QUESTION[selectedQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        console.log("2 sec timer started");
        setTimeout(() => {
          setAnswerState("");
        }, 1000);
      }, 2000);
    },
    [selectedQuestionIndex]
  );

  // Handle skip function
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (selectedAnswer.length === QUESTION.length) {
    return (
      <div id="summary">
        <h2>Quiz Completed</h2>
        <img src={summaryImg} alt="" />
      </div>
    );
  }

  return (
    <AnswerContext.Provider value={{selectedQuestionIndex,answerState,QUESTION, handleSelectAnswer, selectedAnswer}}>
      <div id="quiz">
        <ProgressBar
          key={selectedQuestionIndex}
          timer={10000}
          onTimer={handleSkipAnswer}
        />
        <Question currentQuestion={QUESTION[selectedQuestionIndex].text} selectedQuestionIndex={selectedQuestionIndex}  />
      </div>
    </AnswerContext.Provider>
  );
}

export default Quiz1;
