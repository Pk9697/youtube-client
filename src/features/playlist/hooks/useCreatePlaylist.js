import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPlaylist } from '../services/asyncThunkActions'

function useCreatePlaylist() {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const [formFields, setFormFields] = useState({
    name: '',
    description: '',
    visibility: 'public',
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

  function handleSelectChange(value) {
    setFormFields((prev) => {
      return {
        ...prev,
        visibility: value,
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(createPlaylist({ accessToken, formFields }))
    setFormFields(() => {
      return {
        name: '',
        description: '',
        visibility: 'public',
      }
    })
  }

  return { ...formFields, handleChange, handleSubmit, handleSelectChange }
}

export default useCreatePlaylist
