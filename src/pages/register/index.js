import React, {useState,useEffect} from 'react'
import { List, InputItem,WhiteSpace,WingBlank,Button,Radio } from 'antd-mobile';
import LogoComponent from '@/coms/logo/logo.js'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import * as actionCreators from './store/actionCreators'
const RadioItem = Radio.RadioItem;
const Register = (props) => {
  let _useState = useState({
    user:'',
    pwd:'',
    repeatPwd:'',
    userType:'genius'
  }) // 返回一个数组
  let data= _useState[0] // 数组第一项目为数组
  let setData =  _useState[1]
  const setChangeValue = (k,v)=>{
    data[k] = v
    setData({
      ...data,
    })
  }
  // 注册提交
  const handleRegister = ()=>{
    props.toRegister(data)
  }

  useEffect(()=>{
    setData({
      ...data
    })
  },[])
  const dom =(
    <div className='outer'>
     <h2 className='logo_title'>注册页</h2>
     <LogoComponent />
     <WhiteSpace size='lg'/>
     <WingBlank>
       <List>
          <InputItem onChange={v=>setChangeValue('user',v)} value={data.user}>用户名</InputItem>
          <WhiteSpace/>
          <InputItem type='password' onChange={v=>setChangeValue('pwd',v)} value={data.pwd}>密码</InputItem>
          <WhiteSpace/>
          <InputItem type='password' onChange={v=>setChangeValue('repeatPwd',v)} value={data.repeatPwd}>确认密码</InputItem>
          <WhiteSpace/>
          <RadioItem checked={data.userType === 'genius'} onChange={()=>setChangeValue('userType','genius')}>
             牛人
          </RadioItem>
          <RadioItem checked={data.userType === 'boss'} onChange={()=>setChangeValue('userType','boss')}>
             Boss
          </RadioItem>
          <WhiteSpace size='lg'/>
          <Button type ='primary' onClick={handleRegister}>注册</Button>
       </List>
     </WingBlank>
     {props.msg? <p>{props.msg}</p>:null}
    </div>
  )
  if(props.redirectTo){
    return <Redirect to={props.redirectTo}/>
  }else{
    return dom
  }
}
const mapStateToProps = state =>({
  msg:state.getIn(['register','msg']),
  redirectTo:state.getIn(['register','redirectTo'])
})
const mapDispatchToProps = dispatch=>({
  toRegister(data){
    dispatch(actionCreators.sendRegister(data))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Register)
