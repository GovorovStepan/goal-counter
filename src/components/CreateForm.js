import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, Platform, View } from 'react-native'
import uuid from 'react-native-uuid'
import {
  Button,
  TextInput,
  HelperText,
  Snackbar,
  Portal,
} from 'react-native-paper'
import { useStore } from 'react-redux'
import { saveGoalToStorage } from '../reducers/goalsReducer'

export default function CreateForm() {
  const [loading, setLoading] = useState(false)
  const [amount, setAmount] = useState('')
  const [title, setTitle] = useState('')
  const [snackText, setSnackText] = useState('')
  const [snackBarVisible, setSnackBarVisible] = useState(false)
  const [titleIsToched, setTitleIsToched] = useState(false)
  const [amountIsToched, setAmountIsToched] = useState(false)
  const [titleErrorStatus, setTitleErrorStatus] = useState(false)
  const [amountErrorStatus, setAmountErrorStatus] = useState(false)
  const [amountTypeErrorStatus, setAmountTypeErrorStatus] = useState(false)
  const [createButtonDisabled, setCreateButtonDisabled] = useState(true)
  const store = useStore()

  useEffect(() => {
    setCreateButtonDisabled(
      title.length === 0 ||
        amount.length === 0 ||
        !Number.isInteger(Number(amount))
    )
    handleAmountStatus()
    handleTitleStatus()
  }, [amount, title])

  const handleCreateClick = async () => {
    setLoading(true)
    setCreateButtonDisabled(true)

    try {
      const goals = store.getState().goals

      if (Object.keys(goals).length < 3) {
        store.dispatch(
          saveGoalToStorage(uuid.v4(), { title, amount, current_amount: 0 })
        )
        setSnackText('You succsesfully set goal')
        setSnackBarVisible(true)
      } else {
        setSnackText('You reached the limit of 3 goals')
        setSnackBarVisible(true)
      }
    } catch (error) {
      setSnackText(error.message)
      setSnackBarVisible(true)
    }
    clear()
  }
  const handleTitleStatus = () => {
    if (titleIsToched) {
      setTitleErrorStatus(title.length === 0)
    }
  }

  const handleAmountStatus = () => {
    if (amountIsToched) {
      const isEmpty = amount.length === 0
      const isInteger = Number.isInteger(Number(amount))

      setAmountErrorStatus(isEmpty)
      setAmountTypeErrorStatus(!isEmpty && !isInteger)
    }
  }

  const renderAmountHelper = () => {
    const errorMessages = {
      empty: 'Please, set goal amount',
      notInteger: 'Goal amount should be an integer',
    }

    return (
      <HelperText
        type="error"
        visible={amountErrorStatus || amountTypeErrorStatus}
      >
        {amountErrorStatus ? errorMessages.empty : errorMessages.notInteger}
      </HelperText>
    )
  }

  const clear = () => {
    setLoading(false)
    setAmountIsToched(false)
    setTitleIsToched(false)
    setAmount('')
    setTitle('')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={{ marginBottom: 10 }}>
        <TextInput
          mode="outlined"
          label="Title"
          error={titleErrorStatus}
          value={title}
          disabled={loading}
          onChangeText={(value) => {
            setTitle(value)
          }}
          onFocus={() => setTitleIsToched(true)}
          onBlur={handleTitleStatus}
        />
        <HelperText type="error" visible={titleErrorStatus}>
          Please, set title for your goal
        </HelperText>
      </View>
      <View style={{ marginBottom: 20 }}>
        <TextInput
          mode="outlined"
          label="Amount"
          value={amount}
          disabled={loading}
          error={amountErrorStatus}
          onChangeText={(value) => {
            setAmount(value)
          }}
          onFocus={() => setAmountIsToched(true)}
          onBlur={handleAmountStatus}
          keyboardType="numeric"
        />
        {renderAmountHelper()}
      </View>
      <Button
        mode="contained"
        onPress={handleCreateClick}
        disabled={createButtonDisabled}
        loading={loading}
      >
        Create
      </Button>
      <Portal>
        <Snackbar
          visible={snackBarVisible}
          onDismiss={() => {}}
          action={{
            label: 'Close',
            onPress: () => {
              setSnackBarVisible(false)
            },
          }}
        >
          {snackText}
        </Snackbar>
      </Portal>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
})
