import React, {useState,useEffect,Component} from 'react'
import {connect} from 'react-redux'
import {Button} from 'antd-mobile'


const HookDemo = ()=>{
  //使用useState后，我们修改state必须将整个修改后的state传入去，因为它会直接覆盖之前的state，而不是合并之前state对象。
  //const [count, setCount] = useState(0); 数组解构赋值的开销很大，一般推荐下方使用方式，以提升性能
  let _useState = useState(0) // useState 返回一个数组  0 为状态初始值 initial value
  let count = _useState[0] // 数组第一个为初始值
  let setCount = _useState[1] /// 数组第二个为修改状态值的方法
  useEffect(()=>{ // useEffect 可以看做是 componentDidMount 、componentDidUpdate、componentWillUnmount三个生命周期的集合
    document.title = `you clicked ${count} timtes`
  },[count]) // 传入第二个参数意为 只有count发生了改变，才执行上层函数
  return (
    <div>
      <p>you click {count} times</p>
      <Button onClick= {()=>setCount(count +1)}>click me</Button>
      <Button onClick= {()=>setCount(count -1)}>click me</Button>
    </div>
  )
}
class Site extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    console.log(this.props)
    return(
      <div className='site_box'>
        <Button>{this.props.name}</Button>
        <HookDemo/>
      </div>
    )
  }
}
const mapStateToProps = state=>({
  name:state.getIn(['site','name'])
})
export default connect(mapStateToProps,null)(Site)
