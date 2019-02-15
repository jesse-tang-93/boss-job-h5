import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button} from 'antd-mobile'
class Site extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    console.log(this.props)
    return(
      <div className='site_box'><Button>{this.props.name}</Button></div>
    )
  }
}
const mapStateToProps = state=>({
  name:state.getIn(['site','name'])
})
export default connect(mapStateToProps,null)(Site)
