import { combineReducers } from 'redux-immutable'
import { reducer as siteReducer } from '@/pages/site/store'
import { reducer as registerReducer } from '@/pages/register/store'

const reducers = combineReducers({
  site:siteReducer,
  register: registerReducer
})
export default reducers
