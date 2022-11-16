import { ADDTASK, DELETETASK, EDIT, STATUS } from "../consts/consts";
const inisialState = {
  tasks: [
    { id: 1, description: "programming", user: "ahmed", done: false },
    { id: 2, description: "gaming session", user: "ahmed", done: true },
    { id: 3, description: "gym", user: "ahmed", done: false },
    { id: 4, description: "watch movie", user: "ahmed", done: true },
  ],
  loading: false,
};

export const tasksReducer = (state = inisialState, { type, payload }) => {
  switch (type) {
    case ADDTASK:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case DELETETASK:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== payload),
      };
    case EDIT:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload.id ? { ...el, description: payload.newDesc } : el
        ),
      };
    case STATUS:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload ? { ...el, done: !el.done } : el
        ),
      };

    default:
      return state;
  }
};
