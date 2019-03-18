import { userService } from '../services';
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
                //console.log(this.props.authenticated);
            },
            error => {
                dispatch(failure(error));
            });
    }

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
    }
    
    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function logout(){
    userService.logout();
    return {type: userConstants.LOGOUT };
}
