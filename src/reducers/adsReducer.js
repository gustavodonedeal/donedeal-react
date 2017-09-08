import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function adReducer(state = initialState.ads, action) {
  switch (action.type) {
    case types.LOAD_ADS_SUCCESS:
      return action.ads;

    default:
      return state;
  }
}
