// 路由检测页面
import React,{useEffect,Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const AuthRoute = (props)=> {
  const getUserInfo = async ()=> {
    const publicList = ['/login','/register']
    const pathname = props.location.pathname // 获取当前路径
    if(publicList.indexOf(pathname)>-1){ // 如果当前页面为登录或者注册页，就不获取用户信息
      return null
    }
    await axios.get('/user/info')
    .then(res=>{
        console.log(res)
        if(res.status === 200 ){
          if(res.data.code ===0){
            // 有登录信息的
          }else{ // 无登录信息
            console.log(props)
            props.history.push('/login')
          }
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
// withRouter装饰器的写法，此处还不知道为什么class组件这样写就可以，函数组件（react hooks）写法不行
// @withRouter
// class AuthRoute extends Component{
//   componentDidMount(){
//     axios.get('/user/info')
//     .then(res=>{
//         console.log(res)
//         if(res.status === 200 ){
//           if(res.data.code ===0){
//             // 有登录信息的
//           }else{ // 无登录信息
//             console.log(this.props)
//           }
//           console.log(res.data)
//         }
//       })
//     .catch()
//   }
//   render(){
//     return(
//       <p>判断跳转的地方</p>
//     )
//   }
// }

export default withRouter(AuthRoute)
