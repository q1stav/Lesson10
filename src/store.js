import { createStore } from "redux";
import { appReducer } from "./reducer";


export const store = createStore(appReducer);

store.dispatch({ type: "NEW_GAME" });
