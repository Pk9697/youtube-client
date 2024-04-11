/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { toast } from '@/components/ui/use-toast'
import { fetchVideosByQuery } from './asyncThunkActions'

const initialState = {
  searchResults: [],
  error: null,
  inProgress: false,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideosByQuery.pending, (state) => {
        state.searchResults = []
        state.error = null
        state.inProgress = true
      })
      .addCase(fetchVideosByQuery.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.searchResults = action.payload.data?.docs
          toast({
            title: 'Search Results fetched successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(fetchVideosByQuery.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
  },
})

export { fetchVideosByQuery }

export default searchSlice.reducer
