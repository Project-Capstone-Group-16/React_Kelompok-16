import { useCallback, useState } from 'react'
import { api } from '../../../api'
import { message } from 'antd'

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false)

  const registerData = useCallback(async (body, onSuccess) => {
    try {
      await api.register(body)
      setIsLoading(true)
      onSuccess && onSuccess()
    } catch (err) {
      message.open({
        type: 'error',
        content: `${err?.message}`,
      })
    } finally {
      setIsLoading(false)
    }
  }, [])
  return [isLoading, registerData]
}
