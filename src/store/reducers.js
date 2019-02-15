import { combineReducers } from 'redux-immutable'
import { reducer as siteReducer } from '@/pages/site/store'

const reducers = combineReducers({
  site: siteReducer
})
export default reducers
