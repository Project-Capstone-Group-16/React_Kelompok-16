import { message } from 'antd'
import { useCallback, useState } from 'react'
import { api } from '../../../api'

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState()

  const loginData = useCallback(async (body, onSuccess) => {
    try {
      setIsLoading(true)
      const res = await api.login(body)
      console.log(res)
      setData(res.data.data.token)
      onSuccess && onSuccess()
      message.open({
        type: 'success',
        content: 'Login success!',
      })
    } catch (err) {
      message.open({
        type: 'error',
        content: `${err?.message}`,
      })
    } finally {
      setIsLoading(false)
    }
  }, [])
  return [isLoading, data, loginData]
}
