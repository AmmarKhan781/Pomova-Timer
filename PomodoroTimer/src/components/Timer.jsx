import { useState, useEffect } from "react";
import Tabs from "./Tabs";

export default function Timer({ mode, setMode }) {
  const durations = {
    pomodoro: 1500,
    short: 300,
    long: 900,
  };

  const [seconds, setSeconds] = useState(durations.pomodoro);
  const [running, setRunning] = useState(false);
  const [sessions, setSessions] = useState(0);

  const total = durations[mode];

  useEffect(() => {
    setSeconds(durations[mode]);
    setRunning(false);
  }, [mode]);

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev === 1) {
            if (Notification.permission === "granted") {
              new Notification("Pomova Timer Finished", {
                body: "Your session has completed!",
              });
            }

            if (mode === "pomodoro") {
              const newSessions = sessions + 1;
              setSessions(newSessions);

              localStorage.setItem("pomova_sessions", newSessions);

              if (newSessions % 4 === 0) {
                setMode("long");
              } else {
                setMode("short");
              }
            } else {
              setMode("pomodoro");
            }
          }

          return prev > 0 ? prev - 1 : 0;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running, mode, sessions, setMode]);

  const stopTimer = () => {
    setRunning(false);
    setSeconds(durations[mode]);
  };

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  const progress = seconds / total;

  const size = 220;
  const stroke = 8;
  const center = size / 2;
  const radius = center - stroke;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progress * circumference;

  return (
    <>
      <div className="timer">
        <Tabs mode={mode} setMode={setMode} />

        <div className="progress-ring">
          <svg width="220" height="220" viewBox="0 0 220 220">
            <circle
              stroke="rgba(255,255,255,0.3)"
              fill="transparent"
              strokeWidth={stroke}
              r={radius}
              cx={center}
              cy={center}
            />

            <circle
              stroke="white"
              fill="transparent"
              strokeWidth={stroke}
              r={radius}
              cx={center}
              cy={center}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform={`rotate(-90 ${center} ${center})`}
              style={{ transition: "stroke-dashoffset 1s linear" }}
            />
          </svg>

          <div className="timer-display">
            {minutes}:{secs}
          </div>
        </div>

        <div className="timer-buttons">
          <button className="start-button" onClick={() => setRunning(!running)}>
            {running ? "Pause" : "Start"}
          </button>

          <button className="stop-button" onClick={stopTimer}>
            Stop
          </button>
        </div>
      </div>
    </>
  );
}
