import React, {useState,useEffect} from 'react'
import { List, InputItem,WhiteSpace,WingBlank,Button } from 'antd-mobile';
import LogoComponent from '@/coms/logo/logo.js'
const Login = (props) => {
  console.log(props)
  let _useState = useState(null) // 返回一个数组
  let loginStatus = _useState[0] // 数组第一项目为初始值 null
  let setLoginStatus =  _useState[1]
  const register = () => {
    props.history.push('./register')
  }
  return (
    <div className='outer'>
      <h2 className='logo_title'>登录页</h2>
      <LogoComponent />
      <WhiteSpace size='lg'/>
      <WhiteSpace size='lg'/>
      <WingBlank>
        <Button type='primary'>登录</Button>
        <WhiteSpace/>
        <Button type='primary' onClick= {register}>注册</Button>
      </WingBlank>
    </div>
  )
}
export default Login
