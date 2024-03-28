import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../services/asyncThunkActions'

function useLogin() {
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  })
  const dispatch = useDispatch()
  const { inProgress, isLoggedIn } = useSelector((state) => state.auth)

  function handleChange(e) {
    const { name, value } = e.target
    setFormFields((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(login(formFields))
    setFormFields(() => {
      return {
        email: '',
        password: '',
      }
    })
  }

  return { ...formFields, inProgress, isLoggedIn, handleChange, handleSubmit }
}

export default useLogin
