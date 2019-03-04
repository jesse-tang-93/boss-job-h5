import * as actionTypes from './constants'
import axios from 'axios'
import {Toast} from 'antd-mobile'
// 注册成功
const registerSuccess = data=>({
  type:actionTypes.REGISTER_SUCCESS,
  data
})
const errorMsg = msg =>({
  type:actionTypes.ERROR_MSG,
  data:msg
})
export const sendRegister = data => {
  console.log(data)
  const {user,pwd,repeatPwd,userType} = data
  if(!user | !pwd | !repeatPwd){
    Toast.info('用户名或密码不能为空')
    return errorMsg('用户名或密码不能为空')
  }
  if(pwd!==repeatPwd){
    Toast.info('两次输入的密码不一致')
    return errorMsg('两次输入的密码不一致')
  }
  return dispatch =>{
    axios.post('/user/register',{user,pwd,userType}).then((res)=>{
      if(res.status ===200&& res.data.code ===0){
        dispatch(registerSuccess({user,pwd,userType,msg:res.data.msg}))
      }else{
        dispatch(errorMsg(res.data.msg))
      }
    }).catch(e=>{

    })
  }
}
