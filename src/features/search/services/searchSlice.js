/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { fetchVideosByQuery } from './asyncThunkActions'

const initialState = {
  searchResults: [],
  paginate: null,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVideosByQuery.fulfilled, (state, action) => {
      if (action.payload?.success) {
        const { docs, ...paginateOptions } = action.payload.data || {}
        state.searchResults = docs
        state.paginate = paginateOptions
      }
    })
  },
})

export { fetchVideosByQuery }

export default searchSlice.reducer
