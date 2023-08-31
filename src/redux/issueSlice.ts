import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import github from 'apis/github'
import type { Issues } from 'types/issue'

import { RootState } from './store'

interface IssuesState {
  issues: Issues
  currentPage: number
  isLoading: boolean
}

const initialState: IssuesState = {
  issues: [],
  currentPage: 1,
  isLoading: false,
}

export const fetchIssues = createAsyncThunk<Issues, undefined, { state: RootState }>(
  'issues/fetchIssues',
  async (_, { getState }) => {
    const { issues } = getState()
    const { data } = await github.getIssues(issues.currentPage)
    return data
  },
)

export const issueSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIssues.fulfilled, (state, action) => {
      state.issues = [...state.issues, ...action.payload]
      state.currentPage += 1
      state.isLoading = false
    })
    builder.addCase(fetchIssues.pending, (state) => {
      state.isLoading = true
    })
  },
})

export default issueSlice.reducer
