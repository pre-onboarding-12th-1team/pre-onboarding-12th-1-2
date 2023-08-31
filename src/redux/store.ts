import { configureStore } from '@reduxjs/toolkit'
import detailReducer from 'redux/detailSlice'
import issueReducer from 'redux/issueSlice'

export const store = configureStore({
  reducer: { issues: issueReducer, detail: detailReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
