import { Button, Form, Input, message } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoadingComponent from '../../components/loadingComponent'
import { useLogin } from './hooks/useLogin'
import styles from './style.module.css'

const LoginPage = () => {
  const navigate = useNavigate()
  const [isLoading, login] = useLogin()

  const onLogin = (values) => {
    const body = {
      email: values.email,
      password: values.password,
    }
    login(body, () => {
      message.success('Login success!')
      navigate('/dashboard')
    })
  }
  return (
    <div className={styles['container-login-page']}>
      {isLoading ? <LoadingComponent /> : null}
      <div className={styles['form-login-page']}>
        <h1 className={styles['title-login-page']}>Inventron</h1>
        <Form layout="vertical" onFinish={onLogin}>
          <Form.Item
            /* nanti ganti ke email*/
            className={styles['form-item-login-page']}
            label="Email"
            name="email"
            rules={[
              {
                type: 'email',
                message: 'Email tidak valid!',
              },
              {
                required: true,
                message: 'Masukan email Anda!',
              },
            ]}
          >
            <Input className={styles['input-login-page']} />
          </Form.Item>
          <Form.Item
            className={styles['form-item-login-page']}
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Masukan password Anda!',
              },
              {
                min: 6,
                message: 'Password minimal 6 karakter!',
              },
            ]}
          >
            <Input.Password className={styles['input-login-page']} />
          </Form.Item>
          <Button className={styles['button-login-page']} htmlType="submit">
            Login
          </Button>
        </Form>
        <p className={styles['text-register-login-page']}>
          Belum punya akun? <Link to="/register">Daftar</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
