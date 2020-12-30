import { combineReducers } from "redux";
import fortniteReducer from "./fortniteReducer";

const RootReducer = combineReducers({
    fortnite: fortniteReducer,
})

export default RootReducer;