import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import goalsReducer from './reducers/goalsReducer'
import statusReducer from './reducers/statusReducer'

const store = configureStore(
  {
    reducer: {
      goals: goalsReducer,
      status: statusReducer,
    },
  },
  applyMiddleware(thunk)
)

export default store
