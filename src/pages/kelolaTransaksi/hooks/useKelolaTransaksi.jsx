import { message } from 'antd'
import { useCallback, useState } from 'react'
import { api } from '../../../api/index'

const useKelolaTransaksiApi = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [dataTransaction, setDataTransaction] = useState()

  const getDataTransaction = useCallback(async () => {
    try {
      setIsLoading(true)
      const res = await api.getTransaction()
      setDataTransaction(res?.data?.data)
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

  return [isLoading, dataTransaction, getDataTransaction]
}
export default useKelolaTransaksiApi
