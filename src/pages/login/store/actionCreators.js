
import * as actionTypes from './constants'
import axios from 'axios'
import {Toast} from 'antd-mobile'
const loginSuccess = data=>({
  type:actionTypes.LOGIN_SUCCESS,
  data
})
const errorMsg = msg =>({
  type:actionTypes.ERRORE_MSG,
  data:msg
})
export const toLogin = data=>{
  const {user,pwd} = data
  if(!user){
    Toast.info('请输入用户名')
    return errorMsg('请输入用户名')
  }else if(!pwd){
    Toast.info('请输入密码')
    return errorMsg('请输入密码')
  }
  return dispatch =>{
    axios.post('/user/login',{user,pwd}).then(r=>{
      if(r.status === 200 && r.data.code ===0){
        dispatch(loginSuccess(r.data.data))
      }else{
        Toast.info(r.data.msg)
      }
    }).catch(e=>{
       Toast.info('网络错误，请稍后重试！')
    })
  }
}
const clearSuccess = (msg)=>({
  type:actionTypes.CLEAR_SUCCESS,
  data:msg
})
export const clearUserData=()=>{
  return dispatch =>{
    axios.post('/user/clearUserData').then(r=>{
      if(r.status === 200 && r.data.code ===0){
        Toast.info(r.data.msg)
        dispatch(clearSuccess(r.data.msg))
      }else{
        Toast.info(r.data.msg)
      }
    }).catch(e=>{
       Toast.info('网络错误，请稍后重试！')
    })
  }
}
