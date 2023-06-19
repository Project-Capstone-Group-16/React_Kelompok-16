import { useCallback, useState } from 'react'
import { api } from '../../../api'
import { message } from 'antd'

export const useDashboard = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [dataDashboard, setDataDashboard] = useState()

  const getDataDashboard = useCallback(async () => {
    try {
      setIsLoading(true)
      const res = await api.getDashboard()
      setDataDashboard(res.data.data)
    } catch (err) {
      console.log({ err })
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
