import { UserRoundMinusIcon, UserRoundPlusIcon } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import User from '@/components/User'
import { ROUTES } from '@/data/constants'
import { formatViews } from '@/utils/formatViews'
import { toggleSubscriptionFromChannelList } from '@/features/channel'
import { toggleSubscription } from '@/features/subscription'

function UserContainer({ usersList = [], inProgressSubscription = false }) {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)

  const handleToggleSubscription = (userId) => {
    dispatch(toggleSubscriptionFromChannelList({ userId }))
    dispatch(toggleSubscription({ accessToken, userId }))
  }

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
              <User.Button
                disabled={inProgressSubscription}
                variant="destructive"
                className="sm:ml-auto"
                onClick={() => handleToggleSubscription(userId)}
              >
                <UserRoundMinusIcon className="size-5" />
                Unsubscribe
              </User.Button>
            ) : (
              <User.Button
                disabled={inProgressSubscription}
                className="sm:ml-auto"
                onClick={() => handleToggleSubscription(userId)}
              >
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
