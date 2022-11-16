import React from "react";
import { deleteTask, status } from "../js/actions/actions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TaskItem = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="task"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "5px",
        backgroundColor: "lightgrey",
        margin: "10px",
      }}
    >
      <div className="task_para">
        <p className="para">{el.description}</p>
        <p className="para">{el.user}</p>
      </div>
      <div className="buttons">
        <Link to={`/edit/${el.id}`}>
          <button className="btn_edit">
            <FontAwesomeIcon icon={faPen} />
          </button>
        </Link>

        <button
          className="btn_delete"
          onClick={() => dispatch(deleteTask(el.id))}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
        <button
          onClick={() => dispatch(status(el.id))}
          className={el.done ? "done" : "undone"}
        >
          {el.done ? "Done" : "Undone"}
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
