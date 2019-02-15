import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // 生命周期整体可划分为   初始化时期，数据状态更新时期，组件卸载时期
  constructor(props){
    super(props)
    console.log('组件初始化')
  }
  componentWillMount(){
    console.log(`组件将要加载`)
  }
  componentDidMount(){
    console.log(`组件加载完毕`)
  }
  render() {
    console.log('组件加载中')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
