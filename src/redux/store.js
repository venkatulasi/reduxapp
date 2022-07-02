import { createStore } from "redux";
import laptopRedcuer from "./reducers/laptopReducer";

const store = createStore(laptopRedcuer);

export default store;
