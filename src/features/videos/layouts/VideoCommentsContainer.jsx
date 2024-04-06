import {
  MessageSquarePlusIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from 'lucide-react'
import { useSelector } from 'react-redux'
import Comment from '@/components/Comment'
import { formatTimeAgo } from '@/utils/formatTimeAgo'
import useComment from '../hooks/useComment'

function VideoCommentsContainer({ videoId, comments = [] }) {
  const {
    accessToken,
    user: { avatar: loggedInUserAvatar },
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
        <Comment.AvatarLink src={loggedInUserAvatar} to />
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
          _id,
          content,
          createdAt,
          owner: { userName, avatar },
          likesCount = 0,
          isLiked = false,
          dislikesCount = 0,
          isDisliked = false,
        }) => (
          <Comment key={_id}>
            <Comment.AvatarLink src={avatar} to />
            <Comment.Meta>
              <Comment.Row>
                <Comment.TextLink to>@{userName}</Comment.TextLink>
                <Comment.TextSmall>
                  {formatTimeAgo(createdAt)}
                </Comment.TextSmall>
              </Comment.Row>
              <Comment.Text>{content}</Comment.Text>
              <Comment.Row>
                <Comment.Button size="sm">
                  {isLiked ? (
                    <ThumbsUpIcon fill="skyblue" className="h-4 w-4" />
                  ) : (
                    <ThumbsUpIcon className="h-4 w-4" />
                  )}
                  {likesCount}
                </Comment.Button>
                <Comment.Button size="sm">
                  {isDisliked ? (
                    <ThumbsDownIcon fill="red" className="h-4 w-4" />
                  ) : (
                    <ThumbsDownIcon className="h-4 w-4" />
                  )}
                  {dislikesCount}
                </Comment.Button>
              </Comment.Row>
            </Comment.Meta>
            <Comment.DropdownMenu />
          </Comment>
        )
      )}
    </Comment.Group>
  )
}

export default VideoCommentsContainer
