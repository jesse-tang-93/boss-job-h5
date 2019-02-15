import React from 'react'
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom'
/* react-router 是核心api  react-router-dom和react-router-rn 都继承自react-router。
*react-router-dom是用于浏览器， react-router-rn 是应用于react-nacive
*/

import configStore from '@/store'

import {Provider} from 'react-redux'
import Site from '@/pages/site'
import Login from '@/pages/login'
const store = configStore()
const App = ()=>(
  <Provider store ={store}>
    <Router>
      <Switch>
        <Route path='/'  component={Site}></Route>
        <Route path='/login'  component={Login}></Route>
      </Switch>
    </Router>
  </Provider>
)
export default App
