import {combineReducers} from 'redux';
import { registration } from './registration';
import { login } from './login';

import books from './books';

export default combineReducers({
    login,
    books,
    registration,
})