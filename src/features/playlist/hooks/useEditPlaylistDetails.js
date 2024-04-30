import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editPlaylist } from '../services/asyncThunkActions'

function useEditPlaylistDetails({ playlist = {} }) {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { inProgress } = useSelector((state) => state.playlist)
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
    inProgress,
  }
}

export default useEditPlaylistDetails
