import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useApp from '@/app/useApp'
import { editTweet } from '../services/asyncThunkActions'

function useEditTweet({ tweetId, tweetContent = '' }) {
  const { isLoading: isLoadingEditTweet } = useApp('tweets/editTweet')
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const [inEditMode, setInEditMode] = useState(false)
  const [formFields, setFormFields] = useState({
    content: tweetContent,
  })

  useEffect(() => {
    setFormFields(() => {
      return {
        content: tweetContent,
      }
    })
  }, [tweetContent])

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
    dispatch(editTweet({ accessToken, formFields, tweetId }))
    setFormFields(() => {
      return {
        content: tweetContent,
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
    isLoadingEditTweet,
  }
}

export default useEditTweet
