import React, {useState,useEffect} from 'react'

const Login = () => {
  let _useState = useState(null) // 返回一个数组
  let loginStatus = _useState[0] // 数组第一项目为初始值 null
  let setLoginStatus =  _useState[1]
  return (
    <div>
     {loginStatus}
    </div>
  )
}
export default Login
