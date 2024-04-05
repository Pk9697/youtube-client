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
}
