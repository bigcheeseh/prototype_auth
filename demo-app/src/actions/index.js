import { CREATE_USER_ASYNC, CONFIRM_KEY_ASYNC, INITIAL_KEY_PARAMS, SEND_PASSWORD_ASYNC } from './types';

export const createUser = (payload) => (dispatch) => {

  dispatch({ type: CREATE_USER_ASYNC, payload })
}

export const confirmKey = (payload) => (dispatch) => {
  console.log(payload, 'key')

  dispatch({ type: CONFIRM_KEY_ASYNC, payload})
}

export const initialKeyParams = () => (dispatch) => {

  dispatch({ type: INITIAL_KEY_PARAMS })
}

export const sendPassword = (payload) => (dispatch) => {
  dispatch({type: SEND_PASSWORD_ASYNC, payload})
}

// export const isLogin = (payload) => (dispath) => {
//   dispatch({type: ISLOGIN_CHECK_ASYNC, payload})
// }
