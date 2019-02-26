import * as actionTypes from './constants'
const errorMsg = msg =>({
  type:actionTypes.ERROR_MSG,
  data:msg
})
export const sendRegister = data => {
  console.log(data)
  const {user,pwd,repeatPwd} = data
  if(!user | !pwd | !repeatPwd){
    return errorMsg('用户名或密码不能为空')
  }
}
