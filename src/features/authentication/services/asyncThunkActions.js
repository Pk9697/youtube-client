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

const register = createAsyncThunk('auth/register', async (formFields) => {
  try {
    const url = APIUrls.register()
    const response = await axios.post(url, formFields)
    return response.data
  } catch (err) {
    return err.response?.data
  }
})

const logout = createAsyncThunk('auth/logout', async ({ accessToken }) => {
  try {
    const url = APIUrls.logout()
    const response = await axios.post(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    return response.data
  } catch (err) {
    return err.response?.data
  }
})

const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async ({ accessToken, formFields }) => {
    try {
      const url = APIUrls.updateAvatar()
      const response = await axios.patch(url, formFields, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data
    } catch (err) {
      return err.response?.data
    }
  }
)

const updateCoverImage = createAsyncThunk(
  'auth/updateCoverImage',
  async ({ accessToken, formFields }) => {
    try {
      const url = APIUrls.updateCoverImage()
      const response = await axios.patch(url, formFields, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data
    } catch (err) {
      return err.response?.data
    }
  }
)

const updateAccountDetails = createAsyncThunk(
  'auth/updateAccountDetails',
  async ({ accessToken, formFields }) => {
    try {
      const url = APIUrls.updateAccountDetails()
      const response = await axios.patch(url, formFields, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data
    } catch (err) {
      return err.response?.data
    }
  }
)

export {
  login,
  register,
  logout,
  updateAvatar,
  updateCoverImage,
  updateAccountDetails,
}
