import React, {useState,useEffect} from 'react'
import { List, InputItem,WhiteSpace,WingBlank,Button,Radio } from 'antd-mobile';
import LogoComponent from '@/coms/logo/logo.js'

const RadioItem = Radio.RadioItem;
const Register = () => {
  let _useState = useState('genius') // 返回一个数组
  let userType = _useState[0] // 数组第一项目为初始值用户的类型  genius牛人   或者 boss
  let setUserType =  _useState[1]
  return (
    <div className='outer'>
     <h2 className='logo_title'>注册页</h2>
     <LogoComponent />
     <WhiteSpace size='lg'/>
     <WingBlank>
       <List>
          <InputItem>用户名</InputItem>
          <WhiteSpace/>
          <InputItem>密码</InputItem>
          <WhiteSpace/>
          <InputItem>确认密码</InputItem>
          <WhiteSpace/>
          <RadioItem checked={userType === 'genius'}>
             牛人
          </RadioItem>
          <RadioItem checked={userType === 'boss'}>
             Boss
          </RadioItem>
          <WhiteSpace size='lg'/>
          <Button type ='primary'>注册</Button>
       </List>
     </WingBlank>
    </div>
  )
}
export default Register
