import {fromJS} from 'immutable'
import * as actionTypes from './constants'
import {getRedirectPath} from '@/utils/redirect'
const defaultState =fromJS({
  user:'',
  pwd:'',
  msg:'',
  redirectTo:''
})
export default (state=defaultState,action)=>{
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return state.merge({
        user:action.data.user,
        pwd:action.data.pwd,
        redirectTo:getRedirectPath(action.data)
      })
    case actionTypes.ERRORE_MSG:
      return state.set('msg',action.data)
    case actionTypes.CLEAR_SUCCESS:
      return state.set('msg',action.data)
    default:
      return state
  }
}
