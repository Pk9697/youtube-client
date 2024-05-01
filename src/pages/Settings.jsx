import { useDispatch, useSelector } from 'react-redux'
import { CloudUploadIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Channel from '@/features/channel/components/Channel'
import { getPublicUrl } from '@/utils/getPublicUrl'
import { updateAvatar, updateCoverImage } from '@/features/authentication'

function Settings() {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const {
    user: { fullName, userName, avatar, coverImage },
  } = useSelector((state) => state.auth)

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const formData = new FormData()
      formData.append('avatar', file)
      dispatch(updateAvatar({ accessToken, formFields: formData }))
    }
  }
  const handleCoverImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const formData = new FormData()
      formData.append('coverImage', file)
      dispatch(updateCoverImage({ accessToken, formFields: formData }))
    }
  }

  return (
    <Channel>
      <Label htmlFor="coverImage" className="relative cursor-pointer">
        <Channel.CoverImage src={getPublicUrl(coverImage)} />
        <div className="absolute bottom-2 right-2 rounded bg-secondary/50 p-1">
          <CloudUploadIcon className="size-5" />
        </div>
      </Label>
      <Input
        onChange={handleCoverImageChange}
        type="file"
        id="coverImage"
        className="hidden"
      />
      <Channel.Details>
        <Label htmlFor="avatar" className="relative cursor-pointer">
          <Channel.Avatar src={getPublicUrl(avatar)} />
          <div className="absolute bottom-5 right-7 rounded bg-secondary/50 p-1">
            <CloudUploadIcon className="size-5" />
          </div>
        </Label>
        <Input
          onChange={handleAvatarChange}
          type="file"
          id="avatar"
          className="hidden"
        />
        <Channel.Meta>
          <Channel.Title>{fullName}</Channel.Title>
          <Channel.Text>@{userName}</Channel.Text>
        </Channel.Meta>
      </Channel.Details>
    </Channel>
  )
}

export default Settings
