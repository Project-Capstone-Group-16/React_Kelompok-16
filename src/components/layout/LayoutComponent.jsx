import { Layout, theme } from 'antd'
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
  return (
    <Layout className={styles['layout']} hasSider>
      <SidebarComponent />
      <Layout className="site-layout">
        {/* <HeaderComponent /> */}
        <Content className={styles['container-content']}>{children}</Content>
        <FooterComponent />
      </Layout>
    </Layout>
  )
}

export default LayoutComponent
