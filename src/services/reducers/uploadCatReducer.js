import { UPLOAD_CATS } from "../actions/actionTypes";
const initializedState = {
  json: null,
};

const uploadCatRducer = (state = initializedState, actionTypes) => {
  const { type, payload } = actionTypes;
  switch (type) {
    case UPLOAD_CATS:
      return {
        ...state,
        json: payload,
      };
    default:
      return state;
  }
};
export default uploadCatRducer;
