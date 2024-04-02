const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: 'compact',
})

export function formatViews(views = 0) {
  return VIEW_FORMATTER.format(views)
}
