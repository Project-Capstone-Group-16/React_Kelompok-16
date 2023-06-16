import { api } from '../../../api'

export const useWarehouse = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState()

  const getDataWarehouse = useCallback(async () => {
    try {
      const res = await api.getWarehouse()
      setData(res.data)
    } catch (err) {
      console.log({ err })
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

  return [isLoading, data, getDataWarehouse]
}
