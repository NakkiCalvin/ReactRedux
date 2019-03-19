import { userConstants } from '../constants';




//let user = JSON.stringify(localStorage.getItem("user"));
let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { authenticated: true, user } : { authenticated: false };

let initialAction = (user === null) ? userConstants.LOGIN_FAILURE  : userConstants.LOGIN_SUCCESS ;

export function login(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        authenticated: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {
        authenticated: false,
        error: action.error
      };
    case userConstants.LOGOUT:
      return { authenticated: false };
    default:
      return state
  }
}
