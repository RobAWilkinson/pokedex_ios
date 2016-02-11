import reducers from './reducers'


import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'


const loggerMiddleware = createLogger()
const createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware)
)(createStore)
function configureStore (initialState) {
  return createStoreWithMiddleware(reducers, initialState)
}
export default configureStore

