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
            .then(user =>{
                dispatch(success(user));
        });
    }

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
}

function register(user){
    return dispatch => {
        //dispatch(request);

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                }
            );
    }
    
    //function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
}

function logout(){

}
