import { bookConstants } from '../constants/bookConst';
import { bookService } from '../services';

export const bookActions = {
    create,
    getAll
};

function create(book) {
    return dispatch => {
      dispatch(request({ book }));
      
      bookService.create(book)
        .then(
          newBook => {
            dispatch(success(newBook));
          },
          error => {
            dispatch(failure(error));
          }
        )
    }
    function request(book) { return { type: bookConstants.CREATE_REQUEST, book } }
    function success(newBook) { return { type: bookConstants.CREATE_SUCCESS, newBook } }
    function failure(error) { return { type: bookConstants.CREATE_FAILURE, error } }
}

function getAll() {
    return dispatch => {
      dispatch(request());
      bookService.getAll()
        .then(
          books => {
            dispatch(success(books));
          },
          error => {
            dispatch(failure(error));
          }
        )
    }
    function request() { return { type: bookConstants.GETALL_REQUEST } }
    function success(books) { return { type: bookConstants.GETALL_SUCCESS, books } }
    function failure(error) { return { type: bookConstants.GETALL_FAILURE, error } }
  }


// getBooks = (book) => dispatch => {
//         console.log('I got books');
//         dispatch({type: bookConstants.FIND_FETCH, book })
// }
