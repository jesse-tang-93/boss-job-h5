import React, {useState,useEffect} from 'react'
import { List, InputItem,WhiteSpace,WingBlank,Button } from 'antd-mobile';
import LogoComponent from '@/coms/logo/logo.js'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import * as actionCreators from './store/actionCreators'
const Login = (props) => {
  console.log(props)
  let _useState = useState({user:'',pwd:''}) // 返回一个数组
  let data = _useState[0] // 数组第一项目为初始值
  let  setData=  _useState[1]
  const setDataValue = (k,v)=>{
    data[k]=v
    setData({
      ...data
    })
  }
  const register = () => {
    props.history.push('./register')
  }
  return (
    <div className='outer'>
      {props.redirectTo?<Redirect to={props.redirectTo}/>:null}
      <h2 className='logo_title'>登录页</h2>
      <LogoComponent />
      <WhiteSpace size='lg'/>
      <WhiteSpace size='lg'/>
      <WingBlank>
        <List>
          <InputItem onChange={v=>setDataValue('user',v)} value={data.user}>用户：</InputItem>
          <InputItem type='password' onChange={v=>setDataValue('pwd',v)} value ={data.pwd}>密码：</InputItem>
        </List>
        <WhiteSpace size='lg'/>
        <Button type='primary' onClick={()=>props.login(data)}>登录</Button>
        <WhiteSpace/>
        <Button type='primary' onClick= {register}>注册</Button>
        <WhiteSpace/>
        <Button type='primary' onClick= {props.clearData}>清空数据</Button>
      </WingBlank>
    </div>
  )
}
const mapStateToProps = state => ({
  redirectTo:state.getIn(['login','redirectTo'])
})
const mapDispatchToProps = dispatch => ({
  login(data){
    dispatch(actionCreators.toLogin(data))
  },
  clearData(){
      dispatch(actionCreators.clearUserData())
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Login)
