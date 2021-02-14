import { useState } from "react";

const Filters = ({ filters, setFilters }) => {
  const [completed, setCompleted] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [todo, setTodo] = useState(false);

  if (completed & inProgress & todo) {
    // permet de tout remettre à false (pour afficher toute la listTask)
    // ainsi que remettre le filters a default.
    setCompleted(false);
    filters.status.completed = "";
    setInProgress(false);
    filters.status.inProgress = "";
    setTodo(false);
    filters.status.todo = "";
  }

  //   chaque handle permet de changer de true à false, ainsi que de mettre à jour le filters dans App.js
  const handleCompleted = () => {
    setFilters((filters) => ({
      ...filters,
      status: { ...filters.status, completed: completed ? "" : "Completed" },
    }));
    setCompleted((prev) => !prev);
  };

  const handleInProgress = () => {
    setFilters((filters) => ({
      ...filters,
      status: {
        ...filters.status,
        inProgress: inProgress ? "" : "In Progress",
      },
    }));
    setInProgress((prev) => !prev);
  };

  const handleTodo = () => {
    setFilters((filters) => ({
      ...filters,
      status: { ...filters.status, todo: todo ? "" : "To Do" },
    }));
    setTodo((prev) => !prev);
  };

  return (
    <div className="filters">
      <button
        onClick={() => handleCompleted()}
        style={{
          backgroundColor: completed && "#fbca37",
          color: completed && "#ffffff",
          fontWeight: completed && 600,
        }}
      >
        Completed
      </button>
      <button
        onClick={() => handleInProgress()}
        style={{
          backgroundColor: inProgress && "#fbca37",
          color: inProgress && "#ffffff",
          fontWeight: inProgress && 600,
        }}
      >
        In Progress
      </button>
      <button
        onClick={() => handleTodo()}
        style={{
          backgroundColor: todo && "#fbca37",
          color: todo && "#ffffff",
          fontWeight: todo && 600,
        }}
      >
        To Do
      </button>
    </div>
  );
};

export default Filters;
