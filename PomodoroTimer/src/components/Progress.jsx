import { useEffect, useState } from "react";

export default function Progress() {
  const [sessions, setSessions] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("pomova_sessions");

    if (saved) {
      setSessions(parseInt(saved));
    }
  }, []);

  return (
    <div className="progress">
      <h3>Daily Progress</h3>

      <div className="progress-dots">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className={i < sessions ? "dot done" : "dot"}></span>
        ))}
      </div>
    </div>
  );
}
