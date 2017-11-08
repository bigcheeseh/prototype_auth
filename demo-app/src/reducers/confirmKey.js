import { CONFIRM_KEY, INITIAL_KEY_PARAMS } from '../actions/types'

export const initialKeyValue = {result: '', message: 'код подтверждения отправлен на email'}

export default function (state = initialKeyValue, action) {
  switch (action.type) {
    case CONFIRM_KEY:
      return action.payload
    case INITIAL_KEY_PARAMS:
      return initialKeyValue
    default:
      return state
  }
}
