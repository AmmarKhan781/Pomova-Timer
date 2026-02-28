import { useState, useEffect } from "react";

export default function Tasks() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("pomova_tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pomova_tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];

    updated[index].done = !updated[index].done;

    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);

    setTasks(updated);
  };

  return (
    <div className="tasks">
      <h3>Tasks</h3>

      <div className="task-input">
        <input
          type="text"
          placeholder="Add task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((t, i) => (
          <li key={i} className={t.done ? "task done" : "task"}>
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => toggleTask(i)}
            />

            <span>{t.text}</span>

            <button className="delete-btn" onClick={() => deleteTask(i)}>
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
