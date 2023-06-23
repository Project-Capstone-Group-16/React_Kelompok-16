import { message } from 'antd'
import { useCallback, useState } from 'react'
import { api } from '../../../api'

export const useDashboard = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [dataDashboard, setDataDashboard] = useState()

  const getDataDashboard = useCallback(async () => {
    try {
      setIsLoading(true)
      const res = await api.getDashboard()
      setDataDashboard(res.data.data)
    } catch (err) {
      message.open({
        type: 'error',
        content: `${err?.message}`,
      })
    } finally {
      setIsLoading(false)
    }
  }, [])
  return [isLoading, dataDashboard, getDataDashboard]
}
