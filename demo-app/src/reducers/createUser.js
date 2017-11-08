import { CREATE_USER } from '../actions/types'

const initialLoginData = {login: false, password: {result: '', message: ''}}

export default function (state = initialLoginData, action) {
  switch (action.type) {
    case CREATE_USER:
      return action.payload
    default:
      return state
  }
}
