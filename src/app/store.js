import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '@/features/authentication'

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

export { store }
