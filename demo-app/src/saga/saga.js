import { put, takeEvery, takeLatest, all, call, apply } from 'redux-saga/effects';
import axios from 'axios';

const dispatchUser = (action) => () => axios.post('/api/dispatchUser', action.payload);
const confirmKey   = (action) => () => axios.post('/api/confirmKey', action.payload);
const sendPassword = (action) => () => axios.get('/api/send_password');

function* createUserAsync(action){

       yield put({ type: 'prototype/auth/CREATE_USER', payload: 'loading'})
  try {
       const response = yield call(dispatchUser(action))
       yield put({ type: 'prototype/auth/CREATE_USER', payload: response.data})
  }catch(error){
       console.log(error)
       yield put({ type: 'CREATE_USER_ERROR', payload: error})
  }
}

function* confirmKeyAsync(action){

    const response = yield call(confirmKey(action))

    yield put({ type: 'prototype/auth/CONFIRM_KEY', payload: response.data})

}

function* sendPasswordAsync(action){

    const response = yield call(sendPassword(action))

    yield put({ type: 'prototype/auth/SEND_PASSWORD', payload: response.data})

}
function* watchCreateUserAsync(){

  yield takeEvery('prototype/auth/CREATE_USER_ASYNC', createUserAsync)
}

function* watchConfirmKeyAsync(){

  yield takeEvery('prototype/auth/CONFIRM_KEY_ASYNC', confirmKeyAsync)
}

function* watchSendPasswordAsync(){

  yield takeEvery('prototype/auth/SEND_PASSWORD_ASYNC', sendPasswordAsync)
}


export default function* rootSaga(){
  yield all([
    watchCreateUserAsync(),
    watchConfirmKeyAsync(),
    watchSendPasswordAsync()
  ])
}
