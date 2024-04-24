import {
  FlagIcon,
  PencilIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  Trash2Icon,
  SaveIcon,
  CircleXIcon,
} from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import Comment from '@/components/Comment'
import { formatTimeAgo } from '@/utils/formatTimeAgo'
import {
  deleteComment,
  toggleDislikeComment,
  toggleLikeComment,
} from '../services/asyncThunkActions'
import { ROUTES } from '@/data/constants'
import { getPublicUrl } from '@/utils/getPublicUrl'
import useEditComment from '../hooks/useEditComment'

function VideoCommentContainer({
  videoOwnerId,
  _id: commentId,
  content: commentContent,
  createdAt,
  owner: { _id: commentOwnerId, userName: commentOwnerUserName, avatar } = {},
  likesCount = 0,
  isLiked = false,
  dislikesCount = 0,
  isDisliked = false,
}) {
  const dispatch = useDispatch()
  const { accessToken, user: { _id: loggedInUserId } = {} } = useSelector(
    (state) => state.auth
  )
  const {
    inEditMode,
    toggleEditMode,
    content: commentInput,
    handleChange,
    handleSubmit,
  } = useEditComment({ accessToken, commentContent, commentId })

  return (
    <Comment key={commentId}>
      <Comment.AvatarLink
        src={getPublicUrl(avatar)}
        to={`${ROUTES.PROFILE}/${commentOwnerUserName}`}
      />
      <Comment.Meta className="w-full">
        <Comment.Row>
          <Comment.TextLink to={`${ROUTES.PROFILE}/${commentOwnerUserName}`}>
            @{commentOwnerUserName}
          </Comment.TextLink>
          <Comment.TextSmall>{formatTimeAgo(createdAt)}</Comment.TextSmall>
        </Comment.Row>
        {!inEditMode ? (
          <>
            <Comment.Text>{commentContent}</Comment.Text>
            <Comment.Row>
              <Comment.Button
                onClick={() =>
                  dispatch(toggleLikeComment({ accessToken, commentId }))
                }
                size="sm"
              >
                {isLiked ? (
                  <ThumbsUpIcon fill="skyblue" className="mr-2 size-4" />
                ) : (
                  <ThumbsUpIcon className="mr-2 size-4" />
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
                  <ThumbsDownIcon fill="red" className="mr-2 size-4" />
                ) : (
                  <ThumbsDownIcon className="mr-2 size-4" />
                )}
                {dislikesCount}
              </Comment.Button>
            </Comment.Row>
          </>
        ) : (
          <Comment.Form onSubmit={handleSubmit} className="gap-2">
            <Comment.TextArea
              className="min-h-0"
              rows={1}
              onChange={handleChange}
              name="content"
              value={commentInput}
              required
            />
            <Comment.Button
              disabled={commentInput?.trim() === commentContent}
              type="submit"
              size="icon"
            >
              <SaveIcon className="size-4" />
            </Comment.Button>
            <Comment.Button
              type="button"
              onClick={toggleEditMode}
              variant="outline"
              size="icon"
            >
              <CircleXIcon className="size-4" />
            </Comment.Button>
          </Comment.Form>
        )}
      </Comment.Meta>

      {!inEditMode && (
        <Comment.DropdownMenu>
          <Comment.DropdownMenuContent>
            {loggedInUserId === commentOwnerId && (
              <Comment.DropdownMenuItem onClick={toggleEditMode}>
                <PencilIcon className="size-4" />
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
                <Trash2Icon className="size-4" />
                Delete
              </Comment.DropdownMenuItem>
            )}
            <Comment.DropdownMenuItem>
              <FlagIcon className="size-4" />
              Report
            </Comment.DropdownMenuItem>
          </Comment.DropdownMenuContent>
        </Comment.DropdownMenu>
      )}
    </Comment>
  )
}

export default VideoCommentContainer
