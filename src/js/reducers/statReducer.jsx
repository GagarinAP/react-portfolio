import {ACTION_TYPES} from './../constants/constants.jsx';

export function statistic (state = {}, action) {
  switch (action.type) {
    case ACTION_TYPES.LOAD_STAT:
      let newState = state;
      newState.statistic = action.statistic;
      return newState;
    default:
      return state;
  }
}
