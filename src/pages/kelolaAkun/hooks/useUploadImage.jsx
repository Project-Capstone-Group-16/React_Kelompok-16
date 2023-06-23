import { message } from 'antd'
import { useCallback, useState } from 'react'
import { api } from '../../../api'
export default function useUploadImage() {
  const [isLoading, setIsLoading] = useState(false)

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })

  const uploadImage = useCallback(async (file, onSuccess) => {
    try {
      setIsLoading(true)
      const body = {
        image: await getBase64(file.file.originFileObj),
      }
      const res = await api.uploadImage(body)
      if (res) {
        message.open({
          type: 'success',
          content: `Berhasil Upload Gambar!`,
        })
        onSuccess && onSuccess(res.data.data)
      }
    } catch (err) {
      message.open({
        type: 'error',
        content: `${err?.message}`,
      })
    } finally {
      setIsLoading(false)
    }
  }, [])

  return [uploadImage, isLoading]
}
