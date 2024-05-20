import { useDispatch, useSelector } from 'react-redux'
import {
  CircleXIcon,
  FlagIcon,
  PencilIcon,
  SaveIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  Trash2Icon,
} from 'lucide-react'
import useApp from '@/app/useApp'
import Comment from '@/components/Comment'
import { ROUTES } from '@/data/constants'
import { formatTimeAgo } from '@/utils/formatTimeAgo'
import { getPublicUrl } from '@/utils/getPublicUrl'
import {
  deleteTweet,
  toggleDislikeTweet,
  toggleLikeTweet,
} from '../services/asyncThunkActions'
import useEditTweet from '../hooks/useEditTweet'

function TweetContainer({
  _id: tweetId,
  content: tweetContent,
  createdAt,
  owner: { _id: tweetOwnerId, userName: tweetOwnerUserName, avatar },
  likesCount = 0,
  isLiked = false,
  dislikesCount = 0,
  isDisliked = false,
}) {
  const dispatch = useDispatch()
  const { accessToken, user: { _id: loggedInUserId } = {} } = useSelector(
    (state) => state.auth
  )
  const { isLoading: isLoadingToggleLikeTweet } = useApp(
    'tweets/toggleLikeTweet'
  )
  const { isLoading: isLoadingToggleDislikeTweet } = useApp(
    'tweets/toggleDislikeTweet'
  )
  const { isLoading: isLoadingDeleteTweet } = useApp('tweets/deleteTweet')

  const {
    inEditMode,
    toggleEditMode,
    content: tweetInput,
    handleChange,
    handleSubmit,
    isLoadingEditTweet,
  } = useEditTweet({ tweetContent, tweetId })

  return (
    <Comment key={tweetId}>
      <Comment.AvatarLink
        src={getPublicUrl(avatar)}
        to={`${ROUTES.PROFILE}/${tweetOwnerUserName}`}
      />
      <Comment.Meta className="w-full">
        <Comment.Row>
          <Comment.TextLink to={`${ROUTES.PROFILE}/${tweetOwnerUserName}`}>
            @{tweetOwnerUserName}
          </Comment.TextLink>
          <Comment.TextSmall>{formatTimeAgo(createdAt)}</Comment.TextSmall>
        </Comment.Row>
        {!inEditMode ? (
          <>
            <Comment.Text>{tweetContent}</Comment.Text>
            <Comment.Row>
              <Comment.Button
                disabled={
                  isLoadingToggleLikeTweet || isLoadingToggleDislikeTweet
                }
                onClick={() =>
                  dispatch(toggleLikeTweet({ accessToken, tweetId }))
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
                disabled={
                  isLoadingToggleLikeTweet || isLoadingToggleDislikeTweet
                }
                onClick={() =>
                  dispatch(toggleDislikeTweet({ accessToken, tweetId }))
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
              value={tweetInput}
              required
            />
            <Comment.Button
              disabled={
                tweetInput?.trim() === tweetContent || isLoadingEditTweet
              }
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
            {loggedInUserId === tweetOwnerId && (
              <>
                <Comment.DropdownMenuItem onClick={toggleEditMode}>
                  <PencilIcon className="size-4" />
                  Edit
                </Comment.DropdownMenuItem>
                <Comment.DropdownMenuItem
                  disabled={isLoadingDeleteTweet}
                  onClick={() =>
                    dispatch(deleteTweet({ accessToken, tweetId }))
                  }
                >
                  <Trash2Icon className="size-4" />
                  Delete
                </Comment.DropdownMenuItem>
              </>
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

export default TweetContainer
