import { Menu, Layout, Button } from 'antd'
import React, { useState } from 'react'
import styles from './styles.module.css'
import { MENU_ITEMS } from './constants'
import { logoInventron, iconLogoutPutih, iconLogoutBiru } from '../../../assets/icons/admin'
import { useNavigate } from 'react-router-dom'

const SidebarComponent = () => {
  const [isHover, setIsHover] = useState(false)
  const navigate = useNavigate()
  const { Sider } = Layout
  return (
    <>
      <Sider className={styles['sidebar']}>
        <div className={styles['sidebar-item']}>
          <img className={styles['logo']} src={logoInventron} alt="logo inventron" />
          <Menu className={styles['menu-item']} mode="inline" defaultSelectedKeys={['4']} items={MENU_ITEMS} />
          <div className={styles['image-sidebar']}>
            <p>
              <i>“Always available to save your storage”</i>
            </p>
          </div>
          <Button
            className={styles['button-logout']}
            onMouseEnter={() => {
              setIsHover(true)
            }}
            onMouseLeave={() => {
              setIsHover(false)
            }}
            onClick={() => {
              localStorage.removeItem('token')
              navigate('/login')
            }}
          >
            {isHover ? (
              <img className={styles['icon-logout']} src={iconLogoutBiru} alt="icon logout" />
            ) : (
              <img className={styles['icon-logout']} src={iconLogoutPutih} alt="icon logout" />
            )}
            Logout
          </Button>
        </div>
      </Sider>
    </>
  )
}

export default SidebarComponent
