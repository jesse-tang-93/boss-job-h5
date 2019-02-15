import {createStore, compose, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import rootReducer from './reducers'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose
const middlewares = [
  thunk
]
if(process.env.NODE_ENV === 'development'){
  middlewares.push(require('redux-logger').createLogger())
}
const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
)
export default function configStore() {
  const store = createStore(rootReducer,enhancer)
  return store
}
