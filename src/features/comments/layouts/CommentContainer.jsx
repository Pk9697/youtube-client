import {
  MessageSquarePlusIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from 'lucide-react'
import React from 'react'
import Comment from '../components/Comment'

function CommentContainer() {
  return (
    <Comment.Group>
      <Comment.Title>48 comments</Comment.Title>
      <Comment.Form>
        <Comment.AvatarLink src to />
        <Comment.TextArea />
        <Comment.Button size="icon">
          <MessageSquarePlusIcon />
        </Comment.Button>
      </Comment.Form>

      <Comment>
        <Comment.AvatarLink src to />
        <Comment.Meta>
          <Comment.Row>
            <Comment.TextLink to>@username</Comment.TextLink>
            <Comment.TextSmall>3 days ago</Comment.TextSmall>
          </Comment.Row>
          <Comment.Text>Content</Comment.Text>
          <Comment.Row>
            <Comment.Button size="sm">
              <ThumbsUpIcon fill="skyblue" className="h-4 w-4" /> 122
            </Comment.Button>
            <Comment.Button size="sm">
              <ThumbsDownIcon fill="red" className="h-4 w-4" /> 213
            </Comment.Button>
          </Comment.Row>
        </Comment.Meta>
        <Comment.DropdownMenu />
      </Comment>
      <Comment>
        <Comment.AvatarLink src to />
        <Comment.Meta>
          <Comment.Row>
            <Comment.TextLink to>@username</Comment.TextLink>
            <Comment.TextSmall>3 days ago</Comment.TextSmall>
          </Comment.Row>
          <Comment.Text>Content</Comment.Text>
          <Comment.Row>
            <Comment.Button size="sm">
              <ThumbsUpIcon fill="skyblue" className="h-4 w-4" /> 122
            </Comment.Button>
            <Comment.Button size="sm">
              <ThumbsDownIcon fill="red" className="h-4 w-4" /> 213
            </Comment.Button>
          </Comment.Row>
        </Comment.Meta>
        <Comment.DropdownMenu />
      </Comment>
    </Comment.Group>
  )
}

export default CommentContainer
