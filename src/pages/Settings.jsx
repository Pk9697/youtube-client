import { useDispatch, useSelector } from 'react-redux'
import { CloudUploadIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Channel from '@/features/channel/components/Channel'
import { getPublicUrl } from '@/utils/getPublicUrl'
import { Form, updateAvatar, updateCoverImage } from '@/features/authentication'
import { useUpdateAccountDetails } from '@/features/settings'

function Settings() {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.auth)

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

  const {
    fullName,
    email,
    handleUpdateAccountDetailsChange,
    handleUpdateAccountDetailsSubmit,
  } = useUpdateAccountDetails({ user })

  return (
    <Channel>
      <Label htmlFor="coverImage" className="relative cursor-pointer">
        <Channel.CoverImage src={getPublicUrl(user.coverImage)} />
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
          <Channel.Avatar src={getPublicUrl(user.avatar)} />
          <div className="absolute bottom-3 right-3 rounded bg-secondary/50 p-1">
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
          <Channel.Title>{user?.fullName}</Channel.Title>
          <Channel.Text>@{user?.userName}</Channel.Text>
        </Channel.Meta>
      </Channel.Details>

      <Channel.Tabs defaultValue="account" className="max-w-md">
        <Channel.TabsList className="w-full">
          <Channel.TabsTrigger value="account" className="w-full">
            Update Account
          </Channel.TabsTrigger>
          <Channel.TabsTrigger value="password" className="w-full">
            Update Password
          </Channel.TabsTrigger>
        </Channel.TabsList>

        <Channel.TabsContent value="account">
          <form onSubmit={handleUpdateAccountDetailsSubmit}>
            <Form.GridGroup>
              <Form.InputContainer>
                <Form.Label htmlFor="fullName">Full name</Form.Label>
                <Form.Input
                  value={fullName}
                  type="text"
                  onChange={handleUpdateAccountDetailsChange}
                  name="fullName"
                  id="fullName"
                  required
                />
              </Form.InputContainer>
              <Form.InputContainer>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Input
                  value={email}
                  onChange={handleUpdateAccountDetailsChange}
                  name="email"
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="m@example.com"
                  required
                />
              </Form.InputContainer>
              <Form.Button
                disabled={fullName === user?.fullName && email === user?.email}
                type="submit"
              >
                Save
              </Form.Button>
            </Form.GridGroup>
          </form>
        </Channel.TabsContent>
      </Channel.Tabs>
    </Channel>
  )
}

export default Settings
