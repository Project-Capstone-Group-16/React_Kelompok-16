import { message } from 'antd'
import { useCallback, useState } from 'react'
import { api } from '../../../api'

export const useWarehouse = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [dataWarehouse, setDataWarehouse] = useState()

  const getDataWarehouse = useCallback(async () => {
    try {
      setIsLoading(true)
      const res = await api.getWarehouse()
      setDataWarehouse(res.data.data)
    } catch (err) {
      message.open({
        type: 'error',
        content: `${err?.message}`,
      })
    } finally {
      setIsLoading(false)
      message.open({
        type: 'success',
        content: `Berhasil fetch data!`,
      })
    }
  }, [])

  return [isLoading, dataWarehouse, getDataWarehouse]
}
