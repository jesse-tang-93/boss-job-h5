import * as actionTypes from './constants'
import {fromJS} from 'immutable'
import {getRedirectPath} from '@/utils/redirect'
const defaultState = fromJS({
  redirectTo:'', // 根据后端返回信息自定义需要跳转的页面
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
    case actionTypes.REGISTER_SUCCESS:
      return state.merge({
        userName:action.data.user,
        userPwd:action.data.pwd,
        userType:action.data.userType,
        msg:action.data.msg,
        redirectTo:getRedirectPath(action.data)  // 根据传入的data，判断需要跳转的页面
      })
    default:
      return state
  }
}
