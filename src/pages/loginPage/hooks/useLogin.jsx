import { message } from 'antd'
import { useCallback, useState } from 'react'
import { api } from '../../../api'
import Cookies from 'js-cookie'

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false)

  const loginData = useCallback(async (body, onSuccess) => {
    try {
      setIsLoading(true)
      const res = await api.login(body)
      // console.log(res)
      const token = res.data.data.token
      Cookies.set('token', token, { expires: 1 })
      onSuccess && onSuccess()
    } catch (err) {
      // console.log(err)
      message.open({
        type: 'error',
        content: `${err.response.data}`,
      })
    } finally {
      setIsLoading(false)
    }
  }, [])
  return [isLoading, loginData]
}
