import { createStore } from "redux";
import { rootReducer, initialState } from "./reducers/index";

export type AppStore = typeof initialState;

// It could have a function with rootReducer, it would help to test the application
const store = createStore(rootReducer, initialState);

export default store;
