import React, { useState, useEffect } from "react";
import "./Timer.scss";

const Timer = ({ autostart, delay, time: propsTime }) => {
  const [isStarted, setIsStarted] = useState(autostart);
  const [time, setTime] = useState(propsTime);
  let widthCounter = (time * 100) / propsTime;

  useEffect(() => {
    if (time > 0 && isStarted) {
      const restartState = setTimeout(() => setTime(time - 1), delay);

      return () => {
        clearTimeout(restartState);
      };
    }
  }, [isStarted, time, delay]);

  return (
    <div className="Timer">
      <div className="TimerHeader">
        <button
          className="pauseButton"
          onClick={() => setIsStarted(!isStarted)}
        >
          {isStarted ? "Pause" : "Start"}
        </button>
        <button className="restartButton" onClick={() => setTime(propsTime)}>
          Restart
        </button>
      </div>
      <div className="TimerMainBlock">
        <span className="timerOnScreen">{time}</span>
      </div>
      <div className="TimerFooter">
        <div className="outline">
          <div
            className={
              widthCounter === 100 ? "progressFull" : "progressStarted"
            }
            style={{ width: `${widthCounter}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
