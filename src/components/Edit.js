import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { edit } from "../js/actions/actions";

const Edit = () => {
  const obj = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const oldtask = useSelector((state) =>
    state.tasks.find((el) => el.id === Number(obj.id))
  );

  const [newDesc, setNewDesc] = useState(oldtask.description);
  const handleEdit = () => {
    dispatch(edit(oldtask.id, newDesc));
    navigate("/");
  };
  return (
    <div className="edit">
      <h1 className="edit_heading">Edit task {obj.id}</h1>
      <label className="edit_page_label">New Discription:</label>
      <input
        className="edit_page_input"
        type="text"
        value={newDesc}
        onChange={(e) => setNewDesc(e.target.value)}
      />
      <button className="edit_page_btn" onClick={handleEdit}>
        Save Changes
        <i className="fa-solid fa-floppy-disk"></i>
      </button>
    </div>
  );
};

export default Edit;
