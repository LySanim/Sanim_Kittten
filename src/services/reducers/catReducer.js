import { FETCH_CATS } from "../actions/actionTypes";
const initializedState = {
  json: null,
};

const catReducer = (state = initializedState, actionTypes) => {
  const { type, payload } = actionTypes;
  switch (type) {
    case FETCH_CATS:
      return {
        ...state,
        json: payload,
      };
    default:
      return state;
  }
};
export default catReducer;
