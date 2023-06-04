import { theme, Layout } from 'antd'
import React from 'react'

const HeaderComponent = () => {
  const { Header } = Layout
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    />
  )
}

export default HeaderComponent
