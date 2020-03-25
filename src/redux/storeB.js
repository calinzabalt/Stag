import { createStore } from "redux";
import targetReducer from "./reducers/targetReducer";

const storeB = createStore(targetReducer);

export default storeB;
