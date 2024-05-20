import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadVideo } from '@/features/dashboard'
import useApp from '@/app/useApp'

function useUploadVideo() {
  const { isLoading: isLoadingUploadVideo } = useApp('dashboard/uploadVideo')
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const [formFields, setFormFields] = useState({
    videoFile: null,
    thumbnail: null,
    title: '',
    description: '',
    isPublished: false,
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormFields((prev) => {
      return {
        ...prev,
        [name]: files ? files[0] : value,
      }
    })
  }

  const handleIsPublishedChange = (val) => {
    setFormFields((prev) => {
      return {
        ...prev,
        isPublished: val,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('videoFile', formFields.videoFile)
    formData.append('thumbnail', formFields.thumbnail)
    formData.append('title', formFields.title)
    formData.append('description', formFields.description)
    formData.append('isPublished', formFields.isPublished)

    dispatch(uploadVideo({ formFields: formData, accessToken }))

    setFormFields(() => {
      return {
        videoFile: null,
        thumbnail: null,
        title: '',
        description: '',
        isPublished: false,
      }
    })
  }

  return {
    ...formFields,
    handleChange,
    handleIsPublishedChange,
    handleSubmit,
    isLoadingUploadVideo,
  }
}

export default useUploadVideo
