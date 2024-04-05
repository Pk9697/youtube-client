import {
  MessageSquarePlusIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from 'lucide-react'
import Comment from '@/components/Comment'
import { formatTimeAgo } from '@/utils/formatTimeAgo'

function VideoCommentsContainer({ comments = [] }) {
  return (
    <Comment.Group>
      <Comment.Title>{comments.length} comments</Comment.Title>
      <Comment.Form>
        <Comment.AvatarLink src to />
        <Comment.TextArea />
        <Comment.Button size="icon">
          <MessageSquarePlusIcon />
        </Comment.Button>
      </Comment.Form>

      {comments.map(
        ({
          _id,
          content,
          createdAt,
          owner: { userName, avatar },
          likesCount,
          isLiked,
          dislikesCount,
          isDisliked,
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
