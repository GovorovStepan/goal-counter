import { loadData, saveData } from '../services/storageService'

// Action Types
const SET_GOALS = 'SET_GOALS'
const SET_GOAL = 'SET_GOAL'
const CHANGE_CURRENT_AMOUNT = 'CHANGE_CURRENT_AMOUNT'

// Action Creators
export const setGoals = (goals) => ({
  type: SET_GOALS,
  payload: goals,
})

export const setGoal = (name, value) => ({
  type: SET_GOAL,
  payload: { name, value },
})

export const changeCurrent = (name, value) => ({
  type: CHANGE_CURRENT_AMOUNT,
  payload: { name, value },
})

// Initial State
const initialState = {}

// Reducer
const goalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GOALS:
      return action.payload
    case SET_GOAL:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    case CHANGE_CURRENT_AMOUNT:
      const { name, value } = action.payload
      const item = state[name]
      const updatedItem = {
        ...item,
        current_amount: value,
      }
      return {
        ...state,
        [name]: updatedItem,
      }
    default:
      return state
  }
}

export default goalsReducer

export const saveGoalToStorage = (uuid, value) => async (dispatch) => {
  try {
    const goals = (await loadData('goals')) || {}
    goals[uuid] = value
    saveData('goals', goals)
    dispatch(setGoal(uuid, value))
  } catch (error) {
    console.error('Error saving goals to AsyncStorage:', error)
  }
}
export const deleteGoalFromStorage = (uuid) => async (dispatch) => {
  try {
    const goals = (await loadData('goals')) || {}
    delete goals[uuid]
    saveData('goals', goals)
    dispatch(setGoals(goals))
  } catch (error) {
    console.error('Error saving goals to AsyncStorage:', error)
  }
}

export const updateGoalAmountInStorage = (uuid, value) => async (dispatch) => {
  try {
    const goals = await loadData('goals')
    goals[uuid].current_amount = value
    saveData('goals', goals)
    dispatch(changeCurrent(uuid, value))
  } catch (error) {
    console.error('Error update goal current amount in AsyncStorage:', error)
  }
}

export const loadGoalsFromStorage = () => async (dispatch) => {
  try {
    const goals = (await loadData('goals')) || {}
    dispatch(setGoals(goals))
  } catch (error) {
    console.error('Error loading goals from AsyncStorage:', error)
  }
}
