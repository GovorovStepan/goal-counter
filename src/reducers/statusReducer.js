// Action Types
const APP_LOADED = 'APP_LOADED'
const SHOW_AMOUNT_DIALOG = 'SHOW_AMOUNT_DIALOG'
const HIDE_AMOUNT_DIALOG = 'HIDE_AMOUNT_DIALOG'
const SET_AMOUNT_DIALOGE_TYPE = 'SET_AMOUNT_DIALOGE_TYPE'
const SET_CHANGE_GOAL_UUID = 'SET_CHANGE_GOAL_UUID'
const CLEAR_CHANGE_GOAL_UUID = 'CLEAR_CHANGE_GOAL_UUID'

// Action Creators
export const appLoaded = () => ({
  type: APP_LOADED,
})
export const showAmountDialog = () => ({
  type: SHOW_AMOUNT_DIALOG,
})
export const hideAmountDialog = () => ({
  type: HIDE_AMOUNT_DIALOG,
})
export const setAmountDialogType = (dialog_type) => ({
  type: SET_AMOUNT_DIALOGE_TYPE,
  payload: dialog_type,
})
export const setChangeGoal = (goal_uuid) => ({
  type: SET_CHANGE_GOAL_UUID,
  payload: goal_uuid,
})
export const clearChangeGoal = () => ({
  type: CLEAR_CHANGE_GOAL_UUID,
})

// Initial State
const initialState = {
  app_loading: true,
  amount_dialog: false,
  amount_dialog_type: null,
  change_goal_uuid: null,
}

// Reducer
const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADED:
      return {
        ...state,
        app_loading: false,
      }
    case SHOW_AMOUNT_DIALOG:
      return {
        ...state,
        amount_dialog: true,
      }
    case HIDE_AMOUNT_DIALOG:
      return {
        ...state,
        amount_dialog: false,
      }
    case SET_AMOUNT_DIALOGE_TYPE:
      return {
        ...state,
        amount_dialog_type: action.payload,
      }
    case SET_CHANGE_GOAL_UUID:
      return {
        ...state,
        change_goal_uuid: action.payload,
      }
    case CLEAR_CHANGE_GOAL_UUID:
      return {
        ...state,
        change_goal_uuid: null,
      }
    default:
      return state
  }
}

export default statusReducer
