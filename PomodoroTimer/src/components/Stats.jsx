import { useEffect, useState } from "react";

export default function Stats() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("pomova_sessions");

    if (saved) {
      setCount(parseInt(saved));
    }
  }, []);

  return (
    <div className="stats">
      <h3>Today's Focus</h3>

      <p>{count} Pomodoro Sessions Completed</p>
    </div>
  );
}
