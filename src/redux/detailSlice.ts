import type { SerializedError } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import github from 'apis/github'
import type { Issue } from 'types/issue'

import { RootState } from './store'

interface DetailState {
  issue?: Issue
  isLoading: boolean
  error?: SerializedError
}

const initialState: DetailState = {
  issue: undefined,
  isLoading: false,
  error: undefined,
}

export const fetchDetail = createAsyncThunk<Issue, number, { state: RootState }>(
  'detail/fetchDetail',
  async (issueNum) => {
    const { data } = await github.getIssue(issueNum)
    return data
  },
)

export const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetail.fulfilled, (state, action) => {
      state.issue = action.payload
      state.error = undefined
      state.isLoading = false
    })
    builder.addCase(fetchDetail.pending, (state) => {
      state.issue = undefined
      state.error = undefined
      state.isLoading = true
    })
    builder.addCase(fetchDetail.rejected, (state, action) => {
      state.issue = undefined
      state.error = action.error
      state.isLoading = false
    })
  },
})

export default detailSlice.reducer
