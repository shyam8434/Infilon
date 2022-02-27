import { SET_USERS } from "../action/common";


const iState = {
  users: [],
};

const commonReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    default:
      return state;
  }
};

export default commonReducer;
