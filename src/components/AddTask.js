import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../js/actions/actions";
import "../css/addTask.css";

const AddTask = () => {
  const dispatch = useDispatch();
  const [desc, setDesc] = useState("");
  const [user, setUser] = useState("");
  const tasks = useSelector((state) => state.tasks);

  const handleClick = () => {
    if (desc === "" || user === "") {
      alert("fields description and user required");
      return;
    }
    dispatch(
      addTask({ id: tasks.length + 1, description: desc, user, done: false })
    );
    setDesc("");
    setUser("");
  };
  return (
    <div className="addTask">
      <input
        className="input"
        value={desc}
        placeholder="  Description"
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        className="input"
        value={user}
        placeholder="  User name"
        onChange={(e) => setUser(e.target.value)}
      />
      <button className="btn_add" onClick={handleClick}>
        <span className="btn_txt">Add task</span>
      </button>
    </div>
  );
};

export default AddTask;
