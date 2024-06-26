export const BASE_ROOT =
  import.meta.env.VITE_BASE_ROOT || 'http://localhost:8000'
export const API_ROOT =
  import.meta.env.VITE_API_ROOT || 'http://localhost:8000/api/v1'

export const APIUrls = {
  login: () => `${API_ROOT}/users/login`,
  register: () => `${API_ROOT}/users/register`,

  fetchVideos: (page, limit) =>
    `${API_ROOT}/videos?page=${page}&limit=${limit}`,
  fetchVideo: (videoId) => `${API_ROOT}/videos/view/${videoId}`,
  logout: () => `${API_ROOT}/users/logout`,
  toggleLikeVideo: (videoId) => `${API_ROOT}/likes/toggle/video/${videoId}`,
  toggleDislikeVideo: (videoId) =>
    `${API_ROOT}/dislikes/toggle/video/${videoId}`,
  toggleSubscription: (userId) => `${API_ROOT}/subscriptions/toggle/${userId}`,
  fetchVideoComments: (videoId, page, limit) =>
    `${API_ROOT}/comments/${videoId}?page=${page}&limit=${limit}`,
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
  fetchVideosByQuery: (query, page, limit) =>
    `${API_ROOT}/videos/?query=${query}&page=${page}&limit=${limit}`,
  fetchSubscriptionsVideos: () => `${API_ROOT}/subscriptions/channels/videos`,
  fetchUserSubscribersList: (userId) =>
    `${API_ROOT}/subscriptions/subscribers/${userId}`,
  fetchLoggedInUserWatchHistory: () => `${API_ROOT}/users/watch-history`,
  fetchLoggedInUserPlaylistIdByName: (playlistName) =>
    `${API_ROOT}/playlists/id/${playlistName}`,
  addVideoToPlaylist: (playlistId, videoId) =>
    `${API_ROOT}/playlists/add/?playlistId=${playlistId}&videoId=${videoId}`,
  removeVideoFromPlaylist: (playlistId, videoId) =>
    `${API_ROOT}/playlists/remove/?playlistId=${playlistId}&videoId=${videoId}`,
  createPlaylist: () => `${API_ROOT}/playlists/create`,
  editComment: (commentId) => `${API_ROOT}/comments/update/${commentId}`,
  fetchDashboardStats: () => `${API_ROOT}/dashboard/stats`,
  fetchDashboardVideos: (page = 1, limit = 10) =>
    `${API_ROOT}/dashboard/videos?page=${page}&limit=${limit}`,
  toggleVideoPublishStatus: (videoId) =>
    `${API_ROOT}/videos/toggle/publish/${videoId}`,
  deleteVideo: (videoId) => `${API_ROOT}/videos/delete/${videoId}`,
  uploadVideo: () => `${API_ROOT}/videos/upload`,
  editVideo: (videoId) => `${API_ROOT}/videos/update/${videoId}`,
  deletePlaylist: (playlistId) => `${API_ROOT}/playlists/delete/${playlistId}`,
  editPlaylist: (playlistId) => `${API_ROOT}/playlists/update/${playlistId}`,
  updateAvatar: () => `${API_ROOT}/users/update-avatar`,
  updateCoverImage: () => `${API_ROOT}/users/update-cover-image`,
  updateAccountDetails: () => `${API_ROOT}/users/update-account`,
  updatePassword: () => `${API_ROOT}/users/update-password`,
  verifyAccessToken: () => `${API_ROOT}/users/verify-access-token`,
  // refreshAccessToken: () => `${API_ROOT}/users/refresh-token`,
  editTweet: (tweetId) => `${API_ROOT}/tweets/update/${tweetId}`,
}
