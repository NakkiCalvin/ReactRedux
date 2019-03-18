import {combineReducers} from 'redux';
import { registration } from './registration';
import { login } from './login';

import { routerReducer } from 'react-router-redux';

import books from './books';
import booklists from './booklists';
import filterBooks from './filterBooks';

export default combineReducers({
    login,
    books,
    registration,
    booklists,
    filterBooks
})