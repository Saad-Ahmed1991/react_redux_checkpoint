import React, { useState } from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import "../css/tasklist.css";

const TaskList = () => {
  const newList = useSelector((state) => state.tasks);
  const [show, setShow] = useState("all");
  return (
    <div className="tasklist">
      <div className="searchbuttons">
        <button onClick={() => setShow("all")} className="searchdone">
          All Tasks
        </button>
        <button onClick={() => setShow("done")} className="searchdone">
          Done Tasks
        </button>
        <button onClick={() => setShow("undone")} className="searchundone">
          Undone Tasks
        </button>
      </div>
      {show === "all"
        ? newList.map((el) => <TaskItem key={el.id} el={el} />)
        : show === "done"
        ? newList
            .filter((el) => el.done)
            .map((el) => <TaskItem key={el.id} el={el} />)
        : newList
            .filter((el) => !el.done)
            .map((el) => <TaskItem key={el.id} el={el} />)}
    </div>
  );
};

export default TaskList;
