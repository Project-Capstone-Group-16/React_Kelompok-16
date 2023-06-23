import { message } from 'antd'
import Cookies from 'js-cookie'
import { useCallback, useState } from 'react'
import { api } from '../../../api'

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false)

  const loginData = useCallback(async (body, onSuccess) => {
    try {
      setIsLoading(true)
      const res = await api.login(body)
      const token = res.data.data.token
      Cookies.set('token', token, { expires: 1 })
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
  return [isLoading, loginData]
}
