import axios from 'axios'
import { APIUrls } from '@/utils/apiUrls'
import createAsyncThunkWithLoadingAndError from '@/app/createAsyncThunkWithLoadingAndError'

const login = createAsyncThunkWithLoadingAndError(
  'auth/login',
  async (formFields) => {
    const url = APIUrls.login()
    const response = await axios.post(url, formFields)
    return response.data
  }
)

const register = createAsyncThunkWithLoadingAndError(
  'auth/register',
  async (formFields) => {
    const url = APIUrls.register()
    const response = await axios.post(url, formFields)
    return response.data
  }
)

const logout = createAsyncThunkWithLoadingAndError(
  'auth/logout',
  async ({ accessToken }) => {
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
  }
)

const updateAvatar = createAsyncThunkWithLoadingAndError(
  'auth/updateAvatar',
  async ({ accessToken, formFields }) => {
    const url = APIUrls.updateAvatar()
    const response = await axios.patch(url, formFields, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const updateCoverImage = createAsyncThunkWithLoadingAndError(
  'auth/updateCoverImage',
  async ({ accessToken, formFields }) => {
    const url = APIUrls.updateCoverImage()
    const response = await axios.patch(url, formFields, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const updateAccountDetails = createAsyncThunkWithLoadingAndError(
  'auth/updateAccountDetails',
  async ({ accessToken, formFields }) => {
    const url = APIUrls.updateAccountDetails()
    const response = await axios.patch(url, formFields, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const updatePassword = createAsyncThunkWithLoadingAndError(
  'auth/updatePassword',
  async ({ accessToken, formFields }) => {
    const url = APIUrls.updatePassword()
    const response = await axios.patch(url, formFields, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const verifyAccessToken = createAsyncThunkWithLoadingAndError(
  'auth/verifyAccessToken',
  async ({ accessToken }) => {
    const url = APIUrls.verifyAccessToken()
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

// const refreshAccessToken = createAsyncThunkWithLoadingAndError(
//   'auth/refreshAccessToken',
//   async ({ refreshToken }) => {
//       const url = APIUrls.refreshAccessToken()
//       const response = await axios.post(
//         url,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${refreshToken}`,
//           },
//         }
//       )
//       return response.data
//   }
// )

export {
  login,
  register,
  logout,
  updateAvatar,
  updateCoverImage,
  updateAccountDetails,
  updatePassword,
  verifyAccessToken,
  // refreshAccessToken,
}
