// 路由检测页面
import React,{useEffect} from 'react'
import axios from 'axios'
const AuthRoute = ()=> {
  const getUserInfo = async ()=> {
    await axios.get('/user/info')
    .then(res=>{
        console.log(res)
        if(res.status === 200 ){
          console.log(res.data)
        }
      })
    .catch()
  }
  // useEffect 相当于class组件 componentDidMount ,componentDidUpDate,componentWillUnmount生命周期的集合
  // 执行一些初始化的操作，
  /**
  *如果useEffect的第一个参数返回了函数的时候，react会在每一次执行新的effects之前，执行这个函数来做一些清理操作，
  *因此我们就可以使用它来执行一些清理操作。等价于componentWillUnmount的时候执行清理操作
  */
  useEffect(()=>{
    // 获取用户信息，
    getUserInfo()
    // 判断是否登录，
    //用户的type，
    //用户是否完善信息
  },[])
  return(
    <p>判断跳转的地方</p>
  )
}
export default AuthRoute
