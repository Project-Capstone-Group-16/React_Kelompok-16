import { Layout, theme } from 'antd'
import { useLocation } from 'react-router-dom'
import React from 'react'
import SidebarComponent from './sidebar'
import HeaderComponent from './header'
import FooterComponent from './footer'

const LayoutComponent = ({ children }) => {
  const { Content } = Layout
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const location = useLocation()
  const listPath = ['dashboard', 'kelola-transaksi', 'kelola-warehouse', 'kelola-barang', 'kelola-akun']
  const checkPath = listPath.find((path) => `/${path}` === location.pathname)
  const token = localStorage.getItem('token')

  if (!token || !checkPath) {
    return children
  }
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
