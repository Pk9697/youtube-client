import { BASE_ROOT } from './apiUrls'

export const getPublicUrl = (url) => {
  if (!url) return ''
  return `${BASE_ROOT}/${url}`
}
