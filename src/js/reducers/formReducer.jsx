import {ACTION_TYPES} from './../constants/constants.jsx';

export function formdata (state = {}, action) {
  switch (action.type) {
    case ACTION_TYPES.LOAD_FORM:
      let newState = state;
      newState.form = action.form;
      return newState;
    default:
      return state;
  }
}
