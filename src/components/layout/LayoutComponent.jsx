import { Layout, theme } from 'antd'
import React from 'react'
import SidebarComponent from './sidebar'
import HeaderComponent from './header'
import FooterComponent from './footer'

const LayoutComponent = ({ children }) => {
  const { Content } = Layout
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Layout hasSider>
      <SidebarComponent />
      <Layout className="site-layout">
        <HeaderComponent />
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              height: '100vh',
            }}
          >
            {children}
          </div>
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  )
}

export default LayoutComponent
