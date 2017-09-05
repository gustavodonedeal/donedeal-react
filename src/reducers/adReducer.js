import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function adReducer(state = initialState.ad, action) {
  switch (action.type) {
    case types.LOAD_AD_BY_ID_SUCCESS:
      return state = Object.assign({}, action.ad);

    default:
      return state;
  }
}