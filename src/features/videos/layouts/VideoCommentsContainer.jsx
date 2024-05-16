import { v4 as uuid } from 'uuid'
import { MessageSquarePlusIcon } from 'lucide-react'
import { useSelector } from 'react-redux'
import Comment from '@/components/Comment'
import useComment from '../hooks/useComment'
import { ROUTES } from '@/data/constants'
import { getPublicUrl } from '@/utils/getPublicUrl'
import VideoCommentContainer from './VideoCommentContainer'
import PaginateContainer from '@/layouts/PaginateContainer'
import { Skeleton } from '@/components/ui/skeleton'
import VideoCommentSkeletonContainer from '../skeletons/VideoCommentSkeletonContainer'

function VideoCommentsContainer({
  videoOwnerId,
  videoId,
  comments = [],
  paginate,
  handleChangePage,
  inProgress = false,
}) {
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
      {inProgress ? (
        <Skeleton className="h-7 w-28" />
      ) : (
        <Comment.Title>
          {comments.length} comment{comments.length > 1 && 's'}
        </Comment.Title>
      )}
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

      {inProgress
        ? 'abcdefghij'
            .split('')
            .map(() => <VideoCommentSkeletonContainer key={uuid()} />)
        : comments.map((comment) => (
            <VideoCommentContainer
              inProgress={inProgress}
              videoOwnerId={videoOwnerId}
              key={comment._id}
              {...comment}
            />
          ))}

      <PaginateContainer
        paginate={paginate}
        handleChangePage={handleChangePage}
      />
    </Comment.Group>
  )
}

export default VideoCommentsContainer
