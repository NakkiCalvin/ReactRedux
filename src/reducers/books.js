import {bookConstants} from '../constants/bookConst';

export default function books(state = [], action){
    
    switch (action.type) {
        case bookConstants.CREATE_REQUEST:
          return {};
        case bookConstants.CREATE_SUCCESS:
          return {
            ...state,
            book: action.payload
          };
        case bookConstants.CREATE_FAILURE:
          return {
            error: action.error
          };
        case bookConstants.FIND_FETCH:
          return action.payload
        default:
          return state;
      }
}
