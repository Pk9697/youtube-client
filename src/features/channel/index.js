import ChannelContainer from './layouts/ChannelContainer'
import channelReducer, {
  fetchChannel,
  fetchUserSubscribedToChannels,
  toggleSubscriptionFromChannelProfile,
  toggleSubscriptionFromChannelList,
} from './services/channelSlice'

export {
  ChannelContainer,
  channelReducer,
  fetchChannel,
  fetchUserSubscribedToChannels,
  toggleSubscriptionFromChannelProfile,
  toggleSubscriptionFromChannelList,
}
