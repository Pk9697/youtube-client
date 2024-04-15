import {
  FlagIcon,
  MessageSquarePlusIcon,
  PencilIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  Trash2Icon,
} from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import Comment from '@/components/Comment'
import { formatTimeAgo } from '@/utils/formatTimeAgo'
import useComment from '../hooks/useComment'
import {
  deleteComment,
  toggleDislikeComment,
  toggleLikeComment,
} from '../services/asyncThunkActions'
import { ROUTES } from '@/data/constants'
import { getPublicUrl } from '@/utils/getPublicUrl'

function VideoCommentsContainer({ videoOwnerId, videoId, comments = [] }) {
  const dispatch = useDispatch()
  const {
    accessToken,
    user: {
      avatar: loggedInUserAvatar,
      _id: loggedInUserId,
      userName: loggedInUserName,
    } = {},
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

      {comments.map(
        ({
          _id: commentId,
          content,
          createdAt,
          owner: {
            _id: commentOwnerId,
            userName: commentOwnerUserName,
            avatar,
          } = {},
          likesCount = 0,
          isLiked = false,
          dislikesCount = 0,
          isDisliked = false,
        }) => (
          <Comment key={commentId}>
            <Comment.AvatarLink
              src={getPublicUrl(avatar)}
              to={`${ROUTES.PROFILE}/${commentOwnerUserName}`}
            />
            <Comment.Meta>
              <Comment.Row>
                <Comment.TextLink
                  to={`${ROUTES.PROFILE}/${commentOwnerUserName}`}
                >
                  @{commentOwnerUserName}
                </Comment.TextLink>
                <Comment.TextSmall>
                  {formatTimeAgo(createdAt)}
                </Comment.TextSmall>
              </Comment.Row>
              <Comment.Text>{content}</Comment.Text>
              <Comment.Row>
                <Comment.Button
                  onClick={() =>
                    dispatch(toggleLikeComment({ accessToken, commentId }))
                  }
                  size="sm"
                >
                  {isLiked ? (
                    <ThumbsUpIcon fill="skyblue" className="h-4 w-4" />
                  ) : (
                    <ThumbsUpIcon className="h-4 w-4" />
                  )}
                  {likesCount}
                </Comment.Button>
                <Comment.Button
                  onClick={() =>
                    dispatch(toggleDislikeComment({ accessToken, commentId }))
                  }
                  size="sm"
                >
                  {isDisliked ? (
                    <ThumbsDownIcon fill="red" className="h-4 w-4" />
                  ) : (
                    <ThumbsDownIcon className="h-4 w-4" />
                  )}
                  {dislikesCount}
                </Comment.Button>
              </Comment.Row>
            </Comment.Meta>
            <Comment.DropdownMenu>
              <Comment.DropdownMenuContent>
                {loggedInUserId === commentOwnerId && (
                  <Comment.DropdownMenuItem>
                    <PencilIcon className="h-4 w-4" />
                    Edit
                  </Comment.DropdownMenuItem>
                )}
                {(loggedInUserId === videoOwnerId ||
                  loggedInUserId === commentOwnerId) && (
                  <Comment.DropdownMenuItem
                    onClick={() =>
                      dispatch(deleteComment({ accessToken, commentId }))
                    }
                  >
                    <Trash2Icon className="h-4 w-4" />
                    Delete
                  </Comment.DropdownMenuItem>
                )}
                <Comment.DropdownMenuItem>
                  <FlagIcon className="h-4 w-4" />
                  Report
                </Comment.DropdownMenuItem>
              </Comment.DropdownMenuContent>
            </Comment.DropdownMenu>
          </Comment>
        )
      )}
    </Comment.Group>
  )
}

export default VideoCommentsContainer
