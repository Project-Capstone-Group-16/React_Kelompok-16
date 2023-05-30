import { useCallback, useState } from 'react'
import { api } from '../../../api'

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState()

  const login = useCallback(async (body, onSuccess) => {
    try {
      const res = await api.login(body)
      setData(res.data.data.token)
      setIsLoading(true)
      onSuccess && onSuccess()
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }, [])
  return { isLoading, data, login }
}
