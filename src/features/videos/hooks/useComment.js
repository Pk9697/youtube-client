import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../services/asyncThunkActions'

function useComment({ videoId, accessToken }) {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState({
    content: '',
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
    dispatch(addComment({ accessToken, formFields, videoId }))
    // console.log(formFields.content)
    setFormFields(() => {
      return {
        content: '',
      }
    })
  }

  return { ...formFields, handleChange, handleSubmit }
}

export default useComment
