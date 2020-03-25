import { ADD_TARGET, DELETE_TARGET, CLEAR_TARGETS } from "../../constants";

export const addTarget = (text, dueDate) => {
  const action = {
    type: ADD_TARGET,
    text,
    dueDate
  };
  console.log("action in addTarget", action);
  return action;
};

export const deleteTarget = id => {
  const action = {
    type: DELETE_TARGET,
    id
  };
  console.log("deleting in actions", action);
  return action;
};

export const clearTargets = () => {
  return {
    type: CLEAR_TARGETS
  };
};
