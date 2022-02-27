import { combineReducers } from "redux";
import CommonActionTypes from "../actionType/common";
import common from "./commonReducer";

const appReducer = combineReducers({
  common,
});

const rootReducer = (state, action) => {
  if (action.type === CommonActionTypes.RESET_SESSION) {
    state = {};
  }

  return appReducer(state, action);
};

export default rootReducer;
