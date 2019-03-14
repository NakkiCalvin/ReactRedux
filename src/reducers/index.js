import {combineReducers} from 'redux';
//import { routerReducer } from 'react-router-redux';

import books from './books';
import booklists from './booklists';
import filterBooks from './filterBooks';

export default combineReducers({
    //routing: routerReducer,
    books,
    booklists,
    filterBooks
})