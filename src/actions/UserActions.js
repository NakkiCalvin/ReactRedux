import { userService, bookService } from '../services';
import { userConstants } from '../constants';

export const userAction = {
    login,
    register,
    logout
}

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        
        userService.login(username, password)
            .then(user => {
                dispatch(success(user));
            },
            error => {
                dispatch(failure(error));
            });
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function register(user){
    return dispatch => {
        dispatch(request);

        userService.register(user)
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                });
    };
    
    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function logout(){
    return dispatch => {
        dispatch(request());
        userService.logout();
      }
      function request() { return { type: userConstants.LOGOUT }};
}
