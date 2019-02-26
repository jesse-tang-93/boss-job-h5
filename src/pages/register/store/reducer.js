import * as actionTypes from './constants'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  isAuth:'', // 用户是否登录
  userName:'',
  userPwd:'',
  userType:'',
  msg:''
})
export default (state=defaultState,action) => {
  switch (action.type) {
    case actionTypes.ERROR_MSG:
      return state.set('msg', action.data)
    default:
      return state
  }
}
