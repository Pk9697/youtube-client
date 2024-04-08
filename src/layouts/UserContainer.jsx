import { UserRoundMinusIcon, UserRoundPlusIcon } from 'lucide-react'
import User from '@/components/User'

function UserContainer() {
  const isSubscribed = true
  return (
    <User.Group>
      <User.SearchInput />
      <User>
        <User.AvatarLink src to />
        <User.Meta>
          <User.TextLink>full name</User.TextLink>
          <User.TextSmall>15k subscribers</User.TextSmall>
        </User.Meta>
        {isSubscribed ? (
          <User.Button variant="destructive" className="sm:ml-auto">
            <UserRoundMinusIcon className="size-5" />
            Unsubcribe
          </User.Button>
        ) : (
          <User.Button className="sm:ml-auto">
            <UserRoundPlusIcon className="size-5" />
            Subscribe
          </User.Button>
        )}
      </User>
    </User.Group>
  )
}

export default UserContainer
