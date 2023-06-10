import { Layout, theme } from 'antd'
import { useLocation } from 'react-router-dom'
import React from 'react'
import SidebarComponent from './sidebar'
import HeaderComponent from './header'
import FooterComponent from './footer'
import styles from './styles.module.css'


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
    <Layout className={styles['layout']} hasSider>
      <SidebarComponent />
      <Layout className="site-layout">
        <Content className={styles['container-content']}>{children}</Content>
        <FooterComponent />
      </Layout>
    </Layout>
  )
}

export default LayoutComponent
