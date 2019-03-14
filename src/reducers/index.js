import {combineReducers} from 'redux';
//import { routerReducer } from 'react-router-redux';

import books from './books';
import booklists from './booklists';
import filterBooks from './filterBooks';
import users from './users';

export default combineReducers({
    //routing: routerReducer,
    books,
    users,
    booklists,
    filterBooks
})