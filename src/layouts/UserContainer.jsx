import { UserRoundMinusIcon, UserRoundPlusIcon } from 'lucide-react'
import User from '@/components/User'
import { ROUTES } from '@/data/constants'
import { formatViews } from '@/utils/formatViews'

function UserContainer({ usersList = [] }) {
  return (
    <User.Group>
      <User.SearchInput />
      {!usersList.length && <User.Title>0 users</User.Title>}
      {usersList.map(
        ({
          channel: {
            _id: userId,
            userName,
            avatar,
            fullName,
            subscribersCount = 0,
            isSubscribed = false,
          },
        }) => (
          <User key={userId}>
            <User.AvatarLink
              src={avatar}
              to={`${ROUTES.PROFILE}/${userName}`}
            />
            <User.Meta>
              <User.TextLink>{fullName}</User.TextLink>
              <User.TextSmall>
                {formatViews(subscribersCount)} subscribers
              </User.TextSmall>
            </User.Meta>
            {isSubscribed ? (
              <User.Button variant="destructive" className="sm:ml-auto">
                <UserRoundMinusIcon className="size-5" />
                Unsubscribe
              </User.Button>
            ) : (
              <User.Button className="sm:ml-auto">
                <UserRoundPlusIcon className="size-5" />
                Subscribe
              </User.Button>
            )}
          </User>
        )
      )}
    </User.Group>
  )
}

export default UserContainer
