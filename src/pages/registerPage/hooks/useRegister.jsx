import { useCallback, useState } from 'react'
import { api } from '../../../api'
import { message } from 'antd'

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false)

  const registerData = useCallback(async (body, onSuccess) => {
    try {
      setIsLoading(true)
      await api.register(body)
      onSuccess && onSuccess()
    } catch (err) {
      console.log(err)
      message.open({
        type: 'error',
        content: `${err.response.data.error}`,
      })
    } finally {
      setIsLoading(false)
    }
  }, [])
  return [isLoading, registerData]
}
