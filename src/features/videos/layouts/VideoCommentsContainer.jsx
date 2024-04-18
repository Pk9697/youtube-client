import { MessageSquarePlusIcon } from 'lucide-react'
import { useSelector } from 'react-redux'
import Comment from '@/components/Comment'
import useComment from '../hooks/useComment'
import { ROUTES } from '@/data/constants'
import { getPublicUrl } from '@/utils/getPublicUrl'
import VideoCommentContainer from './VideoCommentContainer'

function VideoCommentsContainer({ videoOwnerId, videoId, comments = [] }) {
  const {
    accessToken,
    user: { avatar: loggedInUserAvatar, userName: loggedInUserName } = {},
  } = useSelector((state) => state.auth)
  const {
    content: commentInput,
    handleChange,
    handleSubmit,
  } = useComment({ videoId, accessToken })

  return (
    <Comment.Group>
      <Comment.Title>{comments.length} comments</Comment.Title>
      <Comment.Form onSubmit={handleSubmit}>
        <Comment.AvatarLink
          src={getPublicUrl(loggedInUserAvatar)}
          to={`${ROUTES.PROFILE}/${loggedInUserName}`}
        />
        <Comment.TextArea
          onChange={handleChange}
          name="content"
          value={commentInput}
          required
        />
        <Comment.Button type="submit" size="icon">
          <MessageSquarePlusIcon />
        </Comment.Button>
      </Comment.Form>

      {comments.map((comment) => (
        <VideoCommentContainer
          videoOwnerId={videoOwnerId}
          key={comment._id}
          {...comment}
        />
      ))}
    </Comment.Group>
  )
}

export default VideoCommentsContainer
