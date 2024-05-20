import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editPlaylist } from '../services/asyncThunkActions'
import useApp from '@/app/useApp'

function useEditPlaylistDetails({ playlist = {} }) {
  const { isLoading: isLoadingEditPlaylistDetails } = useApp(
    'playlist/editPlaylist'
  )
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const [formFields, setFormFields] = useState({
    name: playlist.name,
    description: playlist.description,
    visibility: playlist.visibility,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFields((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const handleSelectChange = (value) => {
    setFormFields((prev) => {
      return {
        ...prev,
        visibility: value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      editPlaylist({ accessToken, formFields, playlistId: playlist._id })
    )
  }

  return {
    ...formFields,
    handleChange,
    handleSelectChange,
    handleSubmit,
    isLoadingEditPlaylistDetails,
  }
}

export default useEditPlaylistDetails
