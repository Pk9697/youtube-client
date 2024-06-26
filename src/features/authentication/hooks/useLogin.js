import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../services/authSlice'

function useLogin() {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  })

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

  return { ...formFields, handleChange, handleSubmit }
}

export default useLogin
