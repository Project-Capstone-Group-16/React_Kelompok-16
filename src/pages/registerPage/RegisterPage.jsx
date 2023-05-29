import { Button, Form, Input, message } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import LoadingComponent from '../../components/loadingComponent'
import { register } from '../../services/auth'
import styles from './style.module.css'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const onRegister = (values) => {
    const data = {
      full_name: values.full_name,
      email: values.email,
      phone_number: values.phone_number,
      password: values.password,
      confirm_password: values.confirm_password,
    }
    setIsLoading(true)
    register(data, (status, res) => {
      if (status) {
        setIsLoading(false)
        message.success(`${res.message}`)
        navigate('/login')
      } else {
        setIsLoading(false)
        message.error(`${res.response.data.error}`)
      }
    })
    console.log(data)
  }
  return (
    <>
      <div className={styles['container-register-page']}>
        {isLoading && <LoadingComponent />}
        <div className={styles['form-register-page']}>
          <h1 className={styles['title-register-page']}>Inventron</h1>
          <Form layout="vertical" onFinish={onRegister}>
            <Form.Item
              className={styles['form-item-register-page']}
              label="Nama Lengkap"
              name="full_name"
              rules={[
                {
                  required: true,
                  message: 'Silahkan masukkan nama lengkap Anda!',
                },
              ]}
            >
              <Input className={styles['input-register-page']} />
            </Form.Item>
            <Form.Item
              className={styles['form-item-register-page']}
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Silahkan masukkan email Anda!',
                },
                {
                  type: 'email',
                  message: 'Email tidak valid!',
                },
              ]}
            >
              <Input className={styles['input-register-page']} />
            </Form.Item>
            <Form.Item
              className={styles['form-item-register-page']}
              label="Nomor Telpon"
              name="phone_number"
              rules={[
                {
                  required: true,
                  message: 'Silahkan masukkan nomor telpon Anda!',
                },
                {
                  pattern: new RegExp(/^[0-9]+$/),
                  message: 'Nomor telpon tidak valid!',
                },
              ]}
            >
              <Input className={styles['input-register-page']} />
            </Form.Item>
            <Form.Item
              className={styles['form-item-register-page']}
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Silahkan masukkan password Anda!',
                },
                {
                  min: 6,
                  message: 'Password minimal 6 karakter!',
                },
              ]}
            >
              <Input.Password className={styles['input-register-page']} />
            </Form.Item>
            <Form.Item
              className={styles['form-item-register-page']}
              label="Konfirmasi Password"
              name="confirm_password"
              rules={[
                {
                  required: true,
                  message: 'Silahkan masukkan konfirmasi password Anda!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error('Konfirmasi password tidak sesuai!'))
                  },
                }),
              ]}
            >
              <Input.Password className={styles['input-register-page']} />
            </Form.Item>
            <Button className={styles['button-register-page']} htmlType="submit">
              Daftar
            </Button>
            <div className={styles['text-register-page']}>
              Sudah memiliki akun?
              <Link to="/login"> Masuk</Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default RegisterPage
