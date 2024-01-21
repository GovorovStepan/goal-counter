import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import goalsReducer from './reducers/goalsReducer'
import actionsReducer from './reducers/actionsReducer'

const store = configureStore(
  {
    reducer: {
      goals: goalsReducer,
      actions: actionsReducer,
    },
  },
  applyMiddleware(thunk)
)

export default store
