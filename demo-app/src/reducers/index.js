import { combineReducers } from 'redux';
import createUser from './createUser';
import confirmKey from './confirmKey';
import sendPassword from './sendPassword';

export default combineReducers({
   loginRes: createUser,
   confirmKey,
   sendPasswordResult: sendPassword
})
