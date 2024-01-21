import React, { useState, useRef, useEffect } from 'react'
import { Dialog, Button, TextInput } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'
import { clearChangeGoal, hideAmountDialog } from '../reducers/statusReducer'
import { updateGoalAmountInStorage } from '../reducers/goalsReducer'

export default function AmountDialog() {
  const amount_dialog = useSelector((state) => state.status.amount_dialog)
  const type = useSelector((state) => state.status.amount_dialog_type)
  const change_goal_uuid = useSelector((state) => state.status.change_goal_uuid)
  const selected_goal_data = useSelector(
    (state) => state.goals[change_goal_uuid]
  )
  const inputRef = useRef()
  const [amount, setAmount] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (inputRef.current && amount_dialog) {
      inputRef.current.focus()
    }
  }, [amount_dialog])

  const hideDialog = () => {
    dispatch(hideAmountDialog())
  }
  const handleCancel = () => {
    clear()
    hideDialog()
  }

  const handleOk = () => {
    calculateNewAmount()
    clear()
    hideDialog()
  }

  const clear = () => {
    setAmount('')
    dispatch(clearChangeGoal())
  }

  const calculateNewAmount = () => {
    let newAmount =
      type === 'plus'
        ? +selected_goal_data.current_amount + +amount
        : +selected_goal_data.current_amount - +amount

    if (
      (type === 'plus' && newAmount >= selected_goal_data.amount) ||
      (type === 'minus' && newAmount < 0)
    ) {
      newAmount = type === 'plus' ? selected_goal_data.amount : 0
    }

    dispatch(updateGoalAmountInStorage(change_goal_uuid, newAmount))
  }

  const formatLabel = () =>
    type === 'plus' ? 'addition amount' : 'reduction amount'

  return (
    amount_dialog && (
      <Dialog visible={amount_dialog} onDismiss={hideDialog}>
        <Dialog.Content>
          <TextInput
            ref={inputRef}
            mode="outlined"
            label={formatLabel()}
            keyboardType="numeric"
            value={amount}
            onChangeText={(value) => {
              setAmount(`${Math.round(value)}`)
            }}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={handleCancel}>Cancel</Button>
          <Button onPress={handleOk}>Confirm</Button>
        </Dialog.Actions>
      </Dialog>
    )
  )
}
