import { createStore } from "redux";
import goalReducer from "./reducers/goalReducer";

const storeA = createStore(goalReducer);

export default storeA;
