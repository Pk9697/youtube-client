import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTweet } from '../services/asyncThunkActions'
// import { addComment } from '../services/asyncThunkActions'

function useTweet({ accessToken }) {
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
    dispatch(addTweet({ accessToken, formFields }))
    setFormFields(() => {
      return {
        content: '',
      }
    })
  }

  return { ...formFields, handleChange, handleSubmit }
}

export default useTweet
