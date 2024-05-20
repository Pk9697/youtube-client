import { v4 as uuid } from 'uuid'
import { MessageSquarePlusIcon } from 'lucide-react'
import { useSelector } from 'react-redux'
import Comment from '@/components/Comment'
import { ROUTES } from '@/data/constants'
import useTweet from '../hooks/useTweet'
import { getPublicUrl } from '@/utils/getPublicUrl'
import VideoCommentSkeletonContainer from '@/features/videos/skeletons/VideoCommentSkeletonContainer'
import useApp from '@/app/useApp'
import TweetContainer from './TweetContainer'

function TweetsContainer({
  currentProfileUserName,
  tweetsList = [],
  inProgress = false,
}) {
  const {
    accessToken,
    user: { avatar: loggedInUserAvatar, userName: loggedInUserName } = {},
  } = useSelector((state) => state.auth)

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
        : tweetsList.map((tweet) => (
            <TweetContainer key={tweet._id} {...tweet} />
          ))}
    </Comment.Group>
  )
}

export default TweetsContainer
