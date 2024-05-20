import Video from '../components/Video'
import { Form } from '@/features/authentication'
import useEditVideo from '../hooks/useEditVideo'

function VideoEditDialogContentContainer({ video }) {
  const {
    title,
    description,
    isPublished,
    handleChange,
    handleIsPublishedChange,
    handleSubmit,
    isLoadingEditVideo,
  } = useEditVideo({ video })
  return (
    <Video.DialogContent>
      <form onSubmit={handleSubmit}>
        <Video.DialogHeader>
          <Video.DialogTitle>Edit video</Video.DialogTitle>
          <Video.DialogDescription>
            Edit your video details.
          </Video.DialogDescription>
        </Video.DialogHeader>
        <Form.GridGroup className="mt-8">
          <Form.InputContainer>
            <Form.Label htmlFor="thumbnail">Thumbnail</Form.Label>
            <Form.Input
              onChange={handleChange}
              name="thumbnail"
              id="thumbnail"
              type="file"
              accept="image/*"
              className="cursor-pointer file:text-primary"
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

          <Form.Button disabled={isLoadingEditVideo} type="submit">
            Save
          </Form.Button>
        </Form.GridGroup>
      </form>
    </Video.DialogContent>
  )
}

export default VideoEditDialogContentContainer
