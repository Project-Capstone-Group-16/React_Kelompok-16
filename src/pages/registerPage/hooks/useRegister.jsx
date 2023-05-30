import { useCallback } from 'react'
import { api } from '../../../api'

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false)

  const register = useCallback(async (body, onSuccess) => {
    try {
      await api.register(body)
      setIsLoading(true)
      onSuccess && onSuccess()
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }, [])
  return { isLoading, register }
}
