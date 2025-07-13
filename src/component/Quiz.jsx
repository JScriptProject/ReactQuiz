import React, { useCallback, useRef, useState } from "react";
import QUESTIONS from "../questions.js";
import questions from "../questions.js";
import quizSummaryImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const [answerStatus, setAnswerStatus] = useState("");

  
  const selectedQuestionIndex =
    answerStatus === "" ? userAnswer.length : userAnswer.length - 1;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswer((prevAnswer) => [...prevAnswer, selectedAnswer]);
      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[selectedQuestionIndex].answers[0]) {
          setAnswerStatus("correct");
          
        } else {
          setAnswerStatus("wrong");
        
        }
        setTimeout(() => {
          setAnswerStatus("");
         
        }, 1000);
      }, 2000);
    },
    [selectedQuestionIndex]
  );
  if (selectedQuestionIndex === questions.length) {
    return (
      <div id="summary">
        <img src={quizSummaryImg} alt="Quiz finished" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  const shuffledAnswer = QUESTIONS[selectedQuestionIndex].answers;
  shuffledAnswer.sort(()=>Math.random() -0.5);

  return (
    <div id="quiz">
      <QuestionTimer
        key={selectedQuestionIndex}
        selectedQuestionIndex={selectedQuestionIndex}
        handleSelectAnswer={handleSelectAnswer}
        timer={15000}
      />
      <h2>{QUESTIONS[selectedQuestionIndex].text}</h2>
      <ul id="answers">
        {QUESTIONS[selectedQuestionIndex].answers.map((answer) => {
          const correctAnswer = QUESTIONS[selectedQuestionIndex].answers[0];
          const selectedAnswer = userAnswer[userAnswer.length -1];
          let cssClass = "";
          if (answerStatus === "answered" && selectedAnswer===answer) {
            cssClass = "selected";
            console.log("I am inside selected");
          }
          if((answerStatus === "correct" && correctAnswer===answer) ||(answerStatus === "wrong" && selectedAnswer ===answer))
          if (answerStatus === "correct" && correctAnswer===answer) {
            cssClass = answerStatus;
            console.log("I am inside correct");
          }
         
          return (
            <li className="answer" key={answer}>
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
    </div>
  );
}

export default Quiz;
