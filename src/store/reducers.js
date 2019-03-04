import { combineReducers } from 'redux-immutable'
import { reducer as siteReducer } from '@/pages/site/store'
import { reducer as registerReducer } from '@/pages/register/store'
import { reducer as loginReducer } from '@/pages/login/store'

const reducers = combineReducers({
  site:siteReducer,
  register: registerReducer,
  login:loginReducer
})
export default reducers
