import { SEND_PASSWORD } from '../actions/types'

const initialData = {result: '', message: ''}

export default function (state = initialData, action) {
  switch (action.type) {
    case SEND_PASSWORD:
      return action.payload
    default:
      return state
  }
}
