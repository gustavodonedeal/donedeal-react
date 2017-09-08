import { combineReducers } from "redux";
import ads from "./adsReducer";
import ad from "./adReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";

const rootReducer = combineReducers({
  ads,
  ad,
  ajaxCallsInProgress
});

export default rootReducer;
