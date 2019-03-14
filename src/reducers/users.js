const initialState = {
    authenticated: false,
    error: '',
    user: {
      Email: '',
      Token: ''
    },
  };
  
  export default function users(state = initialState, action) {
    if(action.type === 'USER_LOGIN_REQUEST') {
      return {...state};
    }
    else if (action.type === 'USER_LOGIN_SUCCESS') {
      return {...state, authenticated: true};
    }
    else if (action.type === 'USER_LOGIN_FAILURE') {
      return {...state, authenticated: false};
    }
    return state;
  }