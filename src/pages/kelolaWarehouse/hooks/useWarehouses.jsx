import { message } from 'antd'
import { useCallback, useState } from 'react'
import { api } from '../../../api'

export const useGetWarehouses = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()

  const getData = useCallback(async () => {
    try {
      const res = await api.getWarehouse()
      setData(res.data)
      message.open({
        type: 'success',
        content: `Berhasil fetch data!`,
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

  return [isLoading, data, getData]
}

export const usePostWarehouse = () => {
  const [isLoading, setIsLoading] = useState(false)

  const createData = useCallback(async (body, onSuccess) => {
    try {
      setIsLoading(true)
      await api.createWarehouse(body)
      onSuccess && onSuccess()
      message.open({
        type: 'success',
        content: 'Data baru berhasil dibuat',
      })
      setIsLoading(false)
    } catch (err) {
      message.open({
        type: 'error',
        content: `${err?.message}`,
      })
    } finally {
      setIsLoading(false)
    }
  }, [])

  return [isLoading, createData]
}

export const useUpdateWarehouse = () => {
  const [isLoading, setIsLoading] = useState(false)

  const updateData = useCallback(async (id, body, onSuccess) => {
    try {
      setIsLoading(true)
      await api.updateWarehouse(id, body)
      onSuccess && onSuccess()
      message.open({
        type: 'success',
        content: 'Berhasil update data',
      })
      setIsLoading(false)
    } catch (err) {
      message.open({
        type: 'error',
        content: `${err?.message}`,
      })
    } finally {
      setIsLoading(false)
    }
  }, [])

  return [isLoading, updateData]
}

export const useDeleteWarehouse = () => {
  const [isLoading, setIsLoading] = useState(false)

  const deleteData = useCallback(async (id, onSuccess) => {
    try {
      setIsLoading(true)
      await api.deleteWatrehouse(id)
      onSuccess && onSuccess()
      message.open({
        type: 'success',
        content: 'Berhasil delete data',
      })
      setIsLoading(false)
    } catch (err) {
      message.open({
        type: 'error',
        content: `${err?.message}`,
      })
    } finally {
      setIsLoading(false)
    }
  }, [])

  return [isLoading, deleteData]
}
