export default function Tabs({ mode, setMode }) {
  return (
    <div className="tabs">
      <button
        className={mode === "pomodoro" ? "active" : ""}
        onClick={() => setMode("pomodoro")}
      >
        Pomodoro
      </button>

      <button
        className={mode === "short" ? "active" : ""}
        onClick={() => setMode("short")}
      >
        Short Break
      </button>

      <button
        className={mode === "long" ? "active" : ""}
        onClick={() => setMode("long")}
      >
        Long Break
      </button>
    </div>
  );
}
