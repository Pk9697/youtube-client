import { useSelector } from 'react-redux'

function useApp(baseType) {
  const isLoading = useSelector((state) => state.app[`${baseType}/loading`])
  const error = useSelector((state) => state.app[`${baseType}/error`])
  return { isLoading, error }
}

export default useApp
