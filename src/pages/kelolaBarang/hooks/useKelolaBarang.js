import { useCallback, useState } from 'react'

import { message } from 'antd'

import { api } from '../../../api'

export const useKelolaBarang = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  const getTransactions = useCallback(async () => {
    try {
      const { data } = await api.getTransaction()
      setData(data.data)
    } catch (err) {
      message.open({
        type: 'error',
        content: `${err?.response?.data?.message}`,
      })
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { isLoading, data, getTransactions }
}
