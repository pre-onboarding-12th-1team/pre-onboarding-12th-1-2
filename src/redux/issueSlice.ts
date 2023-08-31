import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import github from 'apis/github'
import type { Issues } from 'types/issue'

interface IssuesState {
  issues: Issues
  currentPage: number
  loadingState: 'loaded' | 'notLoaded' | 'loading'
}

const initialState: IssuesState = {
  issues: [],
  currentPage: 1,
  loadingState: 'notLoaded',
}

export const fetchIssues = createAsyncThunk(
  'issues/fetchIssues',
  async (currentPage: number) => {
    const { data } = await github.getIssues(currentPage)
    return data
  },
)

export const issueSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    toNextPage: (state) => {
      state.currentPage += 1
      state.loadingState = 'notLoaded'
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIssues.fulfilled, (state, action) => {
      state.issues = [...state.issues, ...action.payload]
      state.loadingState = 'loaded'
    })
    builder.addCase(fetchIssues.pending, (state) => {
      state.loadingState = 'loading'
    })
  },
})

export const { toNextPage } = issueSlice.actions

export default issueSlice.reducer
