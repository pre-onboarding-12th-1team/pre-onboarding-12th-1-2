import { configureStore } from '@reduxjs/toolkit'
import issueReducer from 'redux/issueSlice'

export const store = configureStore({
  reducer: { issues: issueReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
