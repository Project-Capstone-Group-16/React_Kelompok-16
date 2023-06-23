import { message } from 'antd'
import { useCallback, useState } from 'react'
import { api } from '../../../api'

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false)

  const registerData = useCallback(async (body, onSuccess) => {
    try {
      setIsLoading(true)
      await api.register(body)
      onSuccess && onSuccess()
    } catch (err) {
      message.open({
        type: 'error',
        content: `${err.message}`,
      })
    } finally {
      setIsLoading(false)
    }
  }, [])
  return [isLoading, registerData]
}
