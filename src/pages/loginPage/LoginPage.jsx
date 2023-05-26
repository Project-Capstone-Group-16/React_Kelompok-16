import React from 'react'
import styles from './style.module.css'
import { Button, Form, Input } from 'antd'

const LoginPage = () => {
  const onLogin = (values) => {
    alert('Login Success!')
    // console.log(values)
  }
  return (
    <div className={styles['container-login-page']}>
      <div className={styles['form-login-page']}>
        <h1 className={styles['title-login-page']}>Inventron</h1>
        <Form layout="vertical" onFinish={onLogin}>
          <Form.Item
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
          Belum punya akun? <a href="">Daftar</a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
