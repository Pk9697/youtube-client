import { v4 as uuid } from 'uuid'
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
import { ROUTES } from '@/data/constants'
import { formatTimeAgo } from '@/utils/formatTimeAgo'
import useTweet from '../hooks/useTweet'
import {
  deleteTweet,
  toggleDislikeTweet,
  toggleLikeTweet,
} from '../services/asyncThunkActions'
import { getPublicUrl } from '@/utils/getPublicUrl'
import VideoCommentSkeletonContainer from '@/features/videos/skeletons/VideoCommentSkeletonContainer'
import useApp from '@/app/useApp'

function TweetsContainer({
  currentProfileUserName,
  tweetsList = [],
  inProgress = false,
}) {
  const dispatch = useDispatch()
  const {
    accessToken,
    user: {
      avatar: loggedInUserAvatar,
      _id: loggedInUserId,
      userName: loggedInUserName,
    } = {},
  } = useSelector((state) => state.auth)

  const { isLoading: isLoadingToggleLikeTweet } = useApp(
    'tweets/toggleLikeTweet'
  )
  const { isLoading: isLoadingToggleDislikeTweet } = useApp(
    'tweets/toggleDislikeTweet'
  )
  const { isLoading: isLoadingDeleteTweet } = useApp('tweets/deleteTweet')
  const { isLoading: isLoadingAddTweet } = useApp('tweets/addTweet')

  const {
    content: tweetInput,
    handleChange,
    handleSubmit,
  } = useTweet({ accessToken })

  return (
    <Comment.Group>
      {!tweetsList.length && <Comment.Title>0 tweet</Comment.Title>}
      {loggedInUserName === currentProfileUserName && (
        <Comment.Form onSubmit={handleSubmit}>
          <Comment.AvatarLink
            src={getPublicUrl(loggedInUserAvatar)}
            to={`${ROUTES.PROFILE}/${loggedInUserName}`}
          />
          <Comment.TextArea
            onChange={handleChange}
            name="content"
            value={tweetInput}
            required
          />
          <Comment.Button
            disabled={isLoadingAddTweet || !tweetInput.trim()}
            type="submit"
            size="icon"
          >
            <MessageSquarePlusIcon />
          </Comment.Button>
        </Comment.Form>
      )}

      {inProgress
        ? 'abcdefghij'
            .split('')
            .map(() => <VideoCommentSkeletonContainer key={uuid()} />)
        : tweetsList.map(
            ({
              _id: tweetId,
              content,
              createdAt,
              owner: {
                _id: tweetOwnerId,
                userName: tweetOwnerUserName,
                avatar,
              },
              likesCount = 0,
              isLiked = false,
              dislikesCount = 0,
              isDisliked = false,
            }) => (
              <Comment key={tweetId}>
                <Comment.AvatarLink
                  src={getPublicUrl(avatar)}
                  to={`${ROUTES.PROFILE}/${tweetOwnerUserName}`}
                />
                <Comment.Meta>
                  <Comment.Row>
                    <Comment.TextLink
                      to={`${ROUTES.PROFILE}/${tweetOwnerUserName}`}
                    >
                      @{tweetOwnerUserName}
                    </Comment.TextLink>
                    <Comment.TextSmall>
                      {formatTimeAgo(createdAt)}
                    </Comment.TextSmall>
                  </Comment.Row>
                  <Comment.Text>{content}</Comment.Text>
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
                </Comment.Meta>
                <Comment.DropdownMenu>
                  <Comment.DropdownMenuContent>
                    {loggedInUserId === tweetOwnerId && (
                      <>
                        <Comment.DropdownMenuItem>
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
              </Comment>
            )
          )}
    </Comment.Group>
  )
}

export default TweetsContainer
