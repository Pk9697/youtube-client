import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../services/authSlice'

function useRegister() {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState({
    fullName: '',
    email: '',
    userName: '',
    password: '',
    avatar: null,
    coverImage: null,
  })

  //   TODO: Clear image selected name after form submission
  function handleChange(e) {
    const { name, value, files } = e.target

    setFormFields((prev) => {
      return {
        ...prev,
        [name]: files ? files[0] : value,
      }
    })
    // if (files) {
    //   e.target.value = null
    // }
  }

  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData()
    formData.append('fullName', formFields.fullName)
    formData.append('email', formFields.email)
    formData.append('userName', formFields.userName)
    formData.append('password', formFields.password)
    formData.append('avatar', formFields.avatar)
    formData.append('coverImage', formFields.coverImage)

    dispatch(register(formData))

    setFormFields(() => {
      return {
        fullName: '',
        email: '',
        userName: '',
        password: '',
        avatar: null,
        coverImage: null,
      }
    })
  }

  return {
    ...formFields,
    handleChange,
    handleSubmit,
  }
}

export default useRegister
