const APP_LOADED = 'APP_LOADED'

export const appLoaded = () => ({
  type: APP_LOADED,
})

// Initial State
const initialState = {
  app_loading: true,
}

// Reducer
const actionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADED:
      return {
        ...state,
        app_loading: false,
      }
    default:
      return state
  }
}

export default actionsReducer
