import { createStore } from "redux";
// import { ReducerK } from "./Kanhaiya/reducer";
// import { ReducerL } from "./Laxmi/reducer";
import reducer from "./reducer";
// import { ReducerU } from "./Utsav/reducer";

//  const rootReducer = combineReducers(ReducerL , ReducerK, ReducerU)

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())