import React, {useState,useEffect} from 'react'
import LogoComponent from '@/coms/logo/logo.js'
const Register = () => {
  let _useState = useState(null) // 返回一个数组
  let loginStatus = _useState[0] // 数组第一项目为初始值 null
  let setLoginStatus =  _useState[1]
  return (
    <div className='outer'>
      <h2 className='logo_title'>注册页</h2>
     <LogoComponent />
    </div>
  )
}
export default Register
