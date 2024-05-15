import { createAsyncThunk } from '@reduxjs/toolkit'
import { setLoading, setError } from './appSlice.js'
import { toast } from '@/components/ui/use-toast.js'

const createAsyncThunkWithLoadingAndError = (typePrefix, apiCall) => {
  return createAsyncThunk(typePrefix, async (args, { dispatch }) => {
    const baseType = typePrefix
    dispatch(setLoading({ baseType, isLoading: true }))
    dispatch(setError({ baseType, error: null }))

    try {
      const response = await apiCall(args)
      dispatch(setLoading({ baseType, isLoading: false }))
      return response
    } catch (error) {
      dispatch(setLoading({ baseType, isLoading: false }))
      dispatch(setError({ baseType, error: error.response?.data?.message }))
      // throw error
      toast({
        variant: 'destructive',
        title: error.response?.data?.message || 'server error',
      })
      return error.response?.data
    }
  })
}

export default createAsyncThunkWithLoadingAndError
