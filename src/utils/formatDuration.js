const LEADING_ZERO_FORMATTER = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
})

// duration we will receive will be in seconds
export function formatDuration(duration = 0) {
  const floorDuration = Math.floor(duration)
  const hours = Math.floor(floorDuration / 60 / 60)
  const minutes = Math.floor((floorDuration - hours * 60 * 60) / 60)
  const seconds = floorDuration % 60

  if (hours > 0) {
    return `${hours}:${LEADING_ZERO_FORMATTER.format(minutes)}:${LEADING_ZERO_FORMATTER.format(seconds)}`
  }

  return `${minutes}:${LEADING_ZERO_FORMATTER.format(seconds)}`
}
