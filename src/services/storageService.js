import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data))
    console.log('Data saved successfully')
  } catch (error) {
    console.error('Error saving data to AsyncStorage:', error)
  }
}

export const loadData = async (key) => {
  try {
    const storedData = await AsyncStorage.getItem(key)
    return storedData ? JSON.parse(storedData) : null
  } catch (error) {
    console.error('Error loading data from AsyncStorage:', error)
    return null
  }
}

// Очистить все данные в AsyncStorage
export const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear()
    console.log('AsyncStorage очищен успешно')
  } catch (error) {
    console.error('Ошибка при очистке AsyncStorage:', error)
  }
}
