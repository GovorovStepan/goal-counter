import React from 'react'
import { Dialog, Button, Portal, Text } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'
import { clearChangeGoal, hideDeleteDialog } from '../reducers/statusReducer'
import { deleteGoalFromStorage } from '../reducers/goalsReducer'

export default function DeleteDialog() {
  const delete_dialog = useSelector((state) => state.status.delete_dialog)
  const delete_goal_uuid = useSelector((state) => state.status.change_goal_uuid)

  const dispatch = useDispatch()

  const hideDialog = () => {
    dispatch(hideDeleteDialog())
  }
  const handleCancel = () => {
    hideDialog()
    clear()
  }

  const handleOk = () => {
    dispatch(deleteGoalFromStorage(delete_goal_uuid))
    hideDialog()
    clear()
  }

  const clear = () => {
    dispatch(clearChangeGoal())
  }

  return (
    delete_dialog && (
      <Portal>
        <Dialog visible={delete_dialog} onDismiss={hideDialog}>
          <Dialog.Content>
            <Text variant="bodyMedium">Are you sure?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleCancel}>No</Button>
            <Button onPress={handleOk}>Yes</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    )
  )
}
