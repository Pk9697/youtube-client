import { useSelector } from 'react-redux'
import { twMerge } from 'tailwind-merge'
import Video from '../components/Video'
import { Form } from '@/features/authentication'
import { Progress } from '@/components/ui/progress'
import useUploadVideo from '../hooks/useUploadVideo'

function VideoUploadDialogContainer({ children }) {
  const { progress } = useSelector((state) => state.app)
  const {
    title,
    description,
    isPublished,
    handleChange,
    handleIsPublishedChange,
    handleSubmit,
    isLoadingUploadVideo,
  } = useUploadVideo()

  return (
    <Video.Dialog>
      {children}
      <Video.DialogContent>
        <form onSubmit={handleSubmit}>
          <Video.DialogHeader>
            <Video.DialogTitle>Upload video</Video.DialogTitle>
            <Video.DialogDescription>
              Your video will be private until you publish them.
            </Video.DialogDescription>
          </Video.DialogHeader>
          <Form.GridGroup className="mt-8">
            {progress && <Progress value={progress} />}
            <Form.InputContainer>
              <Form.Label htmlFor="videoFile">Video</Form.Label>
              <Form.Input
                onChange={handleChange}
                name="videoFile"
                id="videoFile"
                type="file"
                accept="video/mp4,video/x-m4v,video/*"
                required
                className="cursor-pointer file:text-primary"
              />
            </Form.InputContainer>
            <Form.InputContainer>
              <Form.Label htmlFor="thumbnail">Thumbnail</Form.Label>
              <Form.Input
                onChange={handleChange}
                name="thumbnail"
                id="thumbnail"
                type="file"
                accept="image/*"
                className="cursor-pointer file:text-primary"
                required
              />
            </Form.InputContainer>
            <Form.InputContainer>
              <Form.Label htmlFor="title">Title</Form.Label>
              <Form.Input
                value={title}
                onChange={handleChange}
                name="title"
                id="title"
                autoComplete="title"
                placeholder="Add a title that describes your video"
                required
              />
            </Form.InputContainer>
            <Form.InputContainer>
              <Form.Label htmlFor="description">Description</Form.Label>
              <Form.TextArea
                value={description}
                onChange={handleChange}
                name="description"
                id="description"
                autoComplete="description"
                placeholder="Tell viewers about your video"
                required
              />
            </Form.InputContainer>

            <Form.InputContainer className="grid-cols-[min-content_min-content] items-center">
              <Form.Switch
                id="isPublished"
                checked={isPublished}
                onCheckedChange={handleIsPublishedChange}
              />
              <Form.Label htmlFor="isPublished">Publish</Form.Label>
            </Form.InputContainer>

            <Form.Button disabled={isLoadingUploadVideo} type="submit">
              Save
            </Form.Button>
          </Form.GridGroup>
        </form>
      </Video.DialogContent>
    </Video.Dialog>
  )
}

VideoUploadDialogContainer.DialogTrigger =
  function VideoUploadDialogContainerDialogTrigger({
    children,
    className,
    ...restProps
  }) {
    return (
      <Video.DialogTrigger className={twMerge('', className)} {...restProps}>
        {children}
      </Video.DialogTrigger>
    )
  }

export default VideoUploadDialogContainer
