import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UserContainer from '@/layouts/UserContainer'
import { fetchLoggedInUserSubscribersList } from '@/features/subscription'
import useApp from '@/app/useApp'

function Subscribers() {
  const dispatch = useDispatch()
  const { accessToken, user: { _id: userId } = {} } = useSelector(
    (state) => state.auth
  )
  const { isLoading: isLoadingFetchLoggedInUserSubscribersList } = useApp(
    'subscription/fetchLoggedInUserSubscribersList'
  )
  const { subscribersList } = useSelector((state) => state.subscription)

  useEffect(() => {
    dispatch(fetchLoggedInUserSubscribersList({ accessToken, userId }))
  }, [userId])

  return (
    <div className="p-4">
      <UserContainer
        usersList={subscribersList}
        inProgress={isLoadingFetchLoggedInUserSubscribersList}
      />
    </div>
  )
}

export default Subscribers
