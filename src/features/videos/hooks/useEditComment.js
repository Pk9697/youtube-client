import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { editComment } from '../services/asyncThunkActions'

function useEditComment({ commentId, accessToken, commentContent = '' }) {
  const dispatch = useDispatch()
  const [inEditMode, setInEditMode] = useState(false)
  const [formFields, setFormFields] = useState({
    content: commentContent,
  })

  useEffect(() => {
    setFormFields(() => {
      return {
        content: commentContent,
      }
    })
  }, [commentContent])

  function toggleEditMode() {
    setInEditMode((prev) => !prev)
  }

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
    dispatch(editComment({ accessToken, formFields, commentId }))
    setFormFields(() => {
      return {
        content: commentContent,
      }
    })

    toggleEditMode()
  }

  return {
    ...formFields,
    inEditMode,
    toggleEditMode,
    handleChange,
    handleSubmit,
  }
}

export default useEditComment
