import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editVideo } from '@/features/dashboard'
import useApp from '@/app/useApp'

function useEditVideo({ video = {} }) {
  const { isLoading: isLoadingEditVideo } = useApp('dashboard/editVideo')
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const [formFields, setFormFields] = useState({
    thumbnail: null,
    title: video.title,
    description: video.description,
    isPublished: video.isPublished,
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
    formData.append('thumbnail', formFields.thumbnail)
    formData.append('title', formFields.title)
    formData.append('description', formFields.description)
    formData.append('isPublished', formFields.isPublished)

    dispatch(
      editVideo({ formFields: formData, accessToken, videoId: video._id })
    )

    // setFormFields(() => {
    //   return {
    //     thumbnail: null,
    //     title: '',
    //     description: '',
    //     isPublished: false,
    //   }
    // })
  }

  return {
    ...formFields,
    handleChange,
    handleIsPublishedChange,
    handleSubmit,
    isLoadingEditVideo,
  }
}

export default useEditVideo
