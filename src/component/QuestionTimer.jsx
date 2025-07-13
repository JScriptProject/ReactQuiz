import React, { useEffect, useState } from 'react'

function QuestionTimer({timer, handleSelectAnswer}) {
const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(()=>{
    const timerOut = setTimeout(
       handleSelectAnswer
    ,timer);

    return()=> clearTimeout(timerOut);
  },[timer, handleSelectAnswer])
  useEffect(()=>{
    const timerInterval = setInterval(()=>{
        setRemainingTime((prevTime)=> prevTime - 100)
    }, 100)
    
    return()=>{clearInterval(timerInterval)};
  },[])

  return (
    <progress value={remainingTime} max={timer} />
  )
}

export default QuestionTimer