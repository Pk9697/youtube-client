import Container from './components/Container'
import Form from './components/Form'
import useLogin from './hooks/useLogin'
import authReducer, {
  login,
  register,
  logout,
  updateAvatar,
  updateCoverImage,
  updateAccountDetails,
} from './services/authSlice'

export {
  Container,
  Form,
  authReducer,
  login,
  useLogin,
  register,
  logout,
  updateAvatar,
  updateCoverImage,
  updateAccountDetails,
}
