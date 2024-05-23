// import { BASE_ROOT } from './apiUrls'

export const getPublicUrl = (url) => {
  if (!url) return ''
  // WITHOUT CLOUDINARY
  // return `${BASE_ROOT}/${url}`
  // WITH CLOUDINARY
  return url
}
