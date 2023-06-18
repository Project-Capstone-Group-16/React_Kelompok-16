import { useCallback, useState } from 'react'
import { api } from '../../../api'
import { message } from 'antd'

export const useGetUsers = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [dataUser, setDataUser] = useState()

  const getDataUser = useCallback(async () => {
    try {
      const res = await api.getUser()

      setDataUser(res?.data?.data)
    } catch (err) {
      message.open({
        type: 'error',
        content: `${err.message}`,
      })
    } finally {
      setIsLoading(false)
      message.open({
        type: 'success',
        content: `Berhasil fetch data!`,
      })
    }
  }, [])

  return [isLoading, dataUser, getDataUser]
}
