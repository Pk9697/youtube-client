import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePassword } from '@/features/authentication'
import useApp from '@/app/useApp'

function useUpdatePassword() {
  const { isLoading: isLoadingUpdatePassword } = useApp('auth/updatePassword')
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const [formFields, setFormFields] = useState({
    password: '',
    newPassword: '',
    confirmNewPassword: '',
  })

  const handleUpdatePasswordChange = (e) => {
    const { name, value } = e.target
    setFormFields((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const handleUpdatePasswordSubmit = (e) => {
    e.preventDefault()
    dispatch(updatePassword({ accessToken, formFields }))

    setFormFields({ password: '', newPassword: '', confirmNewPassword: '' })
  }

  const checkPasswordUpdateButtonDisabled = () => {
    const { password, newPassword, confirmNewPassword } = formFields
    return (
      !password ||
      !newPassword ||
      !confirmNewPassword ||
      newPassword !== confirmNewPassword ||
      password === newPassword ||
      isLoadingUpdatePassword
    )
  }

  const isPasswordUpdateButtonDisabled = checkPasswordUpdateButtonDisabled()

  return {
    ...formFields,
    handleUpdatePasswordChange,
    handleUpdatePasswordSubmit,
    isPasswordUpdateButtonDisabled,
  }
}

export default useUpdatePassword
