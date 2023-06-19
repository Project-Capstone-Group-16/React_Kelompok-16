import { useCallback } from 'react'
import { useState } from 'react'
import { api } from '../../../api'
import { message } from 'antd'
import axios from 'axios'
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
        // public_id: file.file.name.replace(/\.[^.]*$/, ''),
        // upload_preset: 'kjdmxira',
        // api_key: '747566867141386',
      }
      const res = await api.uploadImage(body)
      // const res = await axios
      //   .create({
      //     baseURL: 'https://api.cloudinary.com/v1_1',
      //   })
      //   .post('/dvu15ohox/image/upload', body)
      if (res) {
        message.open({
          type: 'success',
          content: `Berhasil Upload Gambar!`,
        })
        onSuccess && onSuccess(res.data.data)
      }
      // console.log(res.data.data)
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
