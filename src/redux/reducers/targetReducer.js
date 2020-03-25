import { ADD_TARGET, DELETE_TARGET, CLEAR_TARGETS } from "../../constants";

import { bake_cookie, read_cookie } from "sfcookies";

const target = action => {
  let { text, dueDate } = action;
  return {
    id: Math.random(),
    text,
    dueDate
  };
};

const clearById = (state = [], id) => {
  const targets = state.filter(target => target.id !== id);
  console.log("new reduced targets", targets);
  return targets;
};

const targets = (state = [], action) => {
  let targets = null;
  state = read_cookie("targets");
  switch (action.type) {
    case ADD_TARGET:
      targets = [...state, target(action)];
      bake_cookie("targets", targets);
      return targets;
    case DELETE_TARGET:
      targets = clearById(state, action.id);
      bake_cookie("targets", targets);
      return targets;
    case CLEAR_TARGETS:
      targets = [];
      bake_cookie("targets", targets);
      return targets;
    default:
      return state;
  }
};

export default targets;
