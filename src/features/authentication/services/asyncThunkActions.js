import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { APIUrls } from '@/utils/apiUrls'

const login = createAsyncThunk('auth/login', async (formFields) => {
  try {
    const url = APIUrls.login()
    const response = await axios.post(url, formFields)
    return response.data
  } catch (err) {
    return err.response?.data
  }
})

export { login }
