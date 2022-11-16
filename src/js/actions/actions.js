import { ADDTASK, DELETETASK, EDIT, STATUS } from "../consts/consts";

export const addTask = (task) => {
  return { type: ADDTASK, payload: task };
};

export const deleteTask = (id) => {
  return { type: DELETETASK, payload: id };
};

export const edit = (id, newDesc) => {
  return { type: EDIT, payload: { id, newDesc } };
};
export const status = (id) => {
  return { type: STATUS, payload: id };
};
