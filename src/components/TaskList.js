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
      <ul>
        <li className="list_head">
          <label className="desc">Descriptions</label>
          <label className="username">Usernames</label>
          <label className="settings">Settings</label>
        </li>
        {show === "all"
          ? newList.map((el) => (
              <li>
                <TaskItem key={el.id} el={el} />
              </li>
            ))
          : show === "done"
          ? newList
              .filter((el) => el.done)
              .map((el) => (
                <li>
                  <TaskItem key={el.id} el={el} />
                </li>
              ))
          : newList
              .filter((el) => !el.done)
              .map((el) => (
                <li>
                  <TaskItem key={el.id} el={el} />
                </li>
              ))}
      </ul>
    </div>
  );
};

export default TaskList;
