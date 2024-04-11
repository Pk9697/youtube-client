export const BASE_ROOT =
  import.meta.env.VITE_BASE_ROOT || 'http://localhost:8000'
export const API_ROOT =
  import.meta.env.VITE_API_ROOT || 'http://localhost:8000/api/v1'

export const APIUrls = {
  login: () => `${API_ROOT}/users/login`,
  register: () => `${API_ROOT}/users/register`,
  fetchVideos: () => `${API_ROOT}/videos`,
  fetchVideo: (videoId) => `${API_ROOT}/videos/view/${videoId}`,
  logout: () => `${API_ROOT}/users/logout`,
  toggleLikeVideo: (videoId) => `${API_ROOT}/likes/toggle/video/${videoId}`,
  toggleDislikeVideo: (videoId) =>
    `${API_ROOT}/dislikes/toggle/video/${videoId}`,
  toggleSubscription: (userId) => `${API_ROOT}/subscriptions/toggle/${userId}`,
  fetchVideoComments: (videoId) => `${API_ROOT}/comments/${videoId}`,
  addComment: (videoId) => `${API_ROOT}/comments/add/${videoId}`,
  toggleLikeComment: (commentId) =>
    `${API_ROOT}/likes/toggle/comment/${commentId}`,
  toggleDislikeComment: (commentId) =>
    `${API_ROOT}/dislikes/toggle/comment/${commentId}`,
  deleteComment: (commentId) => `${API_ROOT}/comments/delete/${commentId}`,
  fetchChannel: (userName) => `${API_ROOT}/users/profile/${userName}`,
  fetchChannelVideos: (userName) => `${API_ROOT}/videos/?userName=${userName}`,
  fetchChannelTweets: (userName) =>
    `${API_ROOT}/tweets/users/?userName=${userName}`,
  addTweet: () => `${API_ROOT}/tweets/create`,
  toggleLikeTweet: (tweetId) => `${API_ROOT}/likes/toggle/tweet/${tweetId}`,
  toggleDislikeTweet: (tweetId) =>
    `${API_ROOT}/dislikes/toggle/tweet/${tweetId}`,
  deleteTweet: (tweetId) => `${API_ROOT}/tweets/delete/${tweetId}`,
  fetchUserSubscribedToChannels: (userName) =>
    `${API_ROOT}/subscriptions/channels/?subscriberUserName=${userName}`,
  fetchChannelPlaylists: (userName) =>
    `${API_ROOT}/playlists/user/?userName=${userName}`,
  fetchCurrentPlaylist: (playlistId) => `${API_ROOT}/playlists/${playlistId}`,
  fetchVideosByQuery: (query) => `${API_ROOT}/videos/?query=${query}`,
}
