import React, { useEffect, useState } from "react";

function ProgressBar({ timer, onTimer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timeoutInt = setTimeout(onTimer, timer);
    return () => clearTimeout(timeoutInt);
  }, [timer, onTimer]);

  useEffect(() => {
    const intervalInst = setInterval(() => {
     
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
    return () => clearInterval(intervalInst);
  }, []);

  return <progress value={remainingTime} max={timer} />;
}

export default ProgressBar;
