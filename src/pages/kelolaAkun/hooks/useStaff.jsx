import { useCallback, useState } from 'react'
import { api } from '../../../api'
import { message } from 'antd'

// Read Data
export const useGetStaff = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()

  const getDataStaff = useCallback(async () => {
    try {
      const res = await api.getStaff()

      setData(res?.data?.data)
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

  return [isLoading, data, getDataStaff]
}

// Create Data
export const usePostStaff = () => {
  const [isLoading, setIsLoading] = useState(false)

  const createStaff = useCallback(async (body, onSuccess) => {
    try {
      setIsLoading(true)
      await api.createStaff(body)
      onSuccess && onSuccess()

      message.open({
        type: 'success',
        content: 'Data Staff berhasil dibuat!',
      })
    } catch (err) {
      message.open({
        type: 'error',
        content: `${err.message}`,
      })
    } finally {
      setIsLoading(false)
    }
  }, [])

  return [isLoading, createStaff]
}

// Update Data
export const useUpdateStaff = () => {
  const [isLoading, setIsLoading] = useState(false)

  const updateData = useCallback(async (id, body, onSuccess) => {
    try {
      setIsLoading(true)
      await api.updateStaff(id, body)
      onSuccess && onSuccess()

      message.open({
        type: 'success',
        content: 'Berhasil ubah data Staff!',
      })

      setIsLoading(false)
    } catch (err) {
      message.open({
        type: 'error',
        content: `${err.message}`,
      })
    } finally {
      setIsLoading(false)
    }
  }, [])

  return [isLoading, updateData]
}
