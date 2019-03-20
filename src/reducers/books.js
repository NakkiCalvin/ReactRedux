import {bookConstants} from '../constants/bookConst';

export default function books(state = [], action){
    
    switch (action.type) {
        case bookConstants.CREATE_REQUEST:
          return [...state];
        case bookConstants.CREATE_SUCCESS:
          return [
            ...state,
            action.payload
          ];
        case bookConstants.CREATE_FAILURE:
          return {
            error: action.error
          };
        case bookConstants.GETALL_REQUEST:
          return {};
        case bookConstants.GETALL_SUCCESS:
          return {
              ...state,
              books: action.payload
          };
        case bookConstants.GETALL_FAILURE:
          return {
              error: action.payload
          }
        case bookConstants.FIND_FETCH:
          return action.payload
        default:
          return state;
      }
}
