import { Layout } from 'antd'
import React from 'react'
import { useLocation } from 'react-router-dom'
import FooterComponent from './footer'
import SidebarComponent from './sidebar'
import styles from './styles.module.css'
import Cookies from 'js-cookie'

const LayoutComponent = ({ children }) => {
  const { Content } = Layout
  const location = useLocation()
  const listPath = ['dashboard', 'kelola-transaksi', 'kelola-warehouse', 'kelola-barang', 'kelola-akun']
  const checkPath = listPath.find((path) => `/${path}` === location.pathname)
  const token = Cookies.get('token')

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
