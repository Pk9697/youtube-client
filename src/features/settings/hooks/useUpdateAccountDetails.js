import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAccountDetails } from '@/features/authentication'
import useApp from '@/app/useApp'

function useUpdateAccountDetails({ user = {} }) {
  const { isLoading: isLoadingUpdateAccountDetails } = useApp(
    'auth/updateAccountDetails'
  )
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const [formFields, setFormFields] = useState({
    fullName: user.fullName,
    email: user.email,
  })

  const handleUpdateAccountDetailsChange = (e) => {
    const { name, value } = e.target
    setFormFields((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const handleUpdateAccountDetailsSubmit = (e) => {
    e.preventDefault()
    dispatch(updateAccountDetails({ accessToken, formFields }))
  }

  return {
    ...formFields,
    handleUpdateAccountDetailsChange,
    handleUpdateAccountDetailsSubmit,
    isLoadingUpdateAccountDetails,
  }
}

export default useUpdateAccountDetails
