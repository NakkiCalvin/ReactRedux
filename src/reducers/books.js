import {bookConstants} from '../constants/bookConst';

export default function books(state = [], action){
    
    switch (action.type) {
        case bookConstants.CREATE_REQUEST:
          return [...state];
        case bookConstants.CREATE_SUCCESS:
          return [
            ...state,
            action.newBook
          ];
        case bookConstants.CREATE_FAILURE:
          return [
             (action.error)
          ];
        case bookConstants.GETALL_REQUEST:
          return [];
        case bookConstants.GETALL_SUCCESS:
        console.log(...state.concat(action.books));
          return [...state.concat(action.books)];
        case bookConstants.GETALL_FAILURE:
          return [
              (action.payload)
          ];
        case bookConstants.DELETE_REQUEST:
          return [...state];
        case bookConstants.DELETE_SUCCESS:
          return [
              ...state.filter((book => book.bookId !== action.id))
          ];
        case bookConstants.DELETE_FAILURE:
          return [(action.error)];
        case bookConstants.EDIT_REQUEST:
          return state.map((book) => book.bookId === action.id ? { ...book, modify:!book.modify} : book);
        case bookConstants.EDIT_SUCCESS:
          return state.map((book) => {
              if(book.bookId === action.updatedBook.bookId){
                return {
                    ...book,
                    title: action.updatedBook.title,
                    content:action.updatedBook.content,
                    modify: !book.modify
                }
              } else return book;
          })
        case bookConstants.EDIT_FAILURE:
          return [
              (action.error)
          ];
        case bookConstants.FIND_FETCH:
          return action.payload
        default:
          return state;
      }
}
