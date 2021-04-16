import { createStore } from 'redux'
import reducers from './reducers'

// store
const store = createStore(reducers);

export default store