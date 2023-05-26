import { Button, Form, Input, message } from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../services/auth'
import styles from './style.module.css'
import LoadingComponent from '../../components/loadingComponent'

const LoginPage = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const onLogin = (values) => {
    const data = {
      email: values.email, 
      password: values.password,
    }
    setIsLoading(true)
    login(data, (status, res) => {
      if (status) {
        setIsLoading(false)
        message.success('Login success!')
        localStorage.setItem('token', res)
        console.log(res)
        navigate('/admin/warehouse')
      } else {
        setIsLoading(false)
        message.error(`Login failed! ${res.response.data}`)
        // console.log(res.response.data)
      }
    })
  }
  return (
    <div className={styles['container-login-page']}>
      {isLoading && <LoadingComponent />}
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
                message: 'Please input valid email!',
              },
              {
                required: true,
                message: 'Please input your email!',
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
                message: 'Please input your password!',
              },
              {
                min: 6,
                message: 'Password must be at least 6 characters!',
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
          Belum punya akun? <Link to="/register/admin">Daftar</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
