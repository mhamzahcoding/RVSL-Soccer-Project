import isEmpty from '../validation/is-empty';

import { SET_CURRENT_USER } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

// manipulated the state to include new user
// isAuthenticated depends on action.payload is empty
// user is actually loading the payload which has all the user information
// when user logs out, it goes back to initial state which is null
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}