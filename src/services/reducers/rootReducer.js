import { combineReducers } from "redux"
import catReducer from "./catReducer"
// import uploadCatRducer from "./uploadCatReducer"

const rootReducer = combineReducers({
    CAT_REDUCER: catReducer,
    // UPLOAD_CAT_REDUCER: uploadCatRducer

    })
export default rootReducer