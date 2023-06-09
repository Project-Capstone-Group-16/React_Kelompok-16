import { Menu, Layout, Button } from 'antd'
import React, { useState } from 'react'
import styles from './styles.module.css'
import { MENU_ITEMS } from './constants'
import { logoInventron, iconLogoutPutih, iconLogoutBiru } from '../../../assets/icons/admin'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const SidebarComponent = () => {
  const [isHover, setIsHover] = useState(false)
  const navigate = useNavigate()
  const path = window.location.pathname
  const [current, setCurrent] = useState(path)
  const { Sider } = Layout
  const onPath = (e) => {
    setCurrent(e.key)
  }
  const onHome = () => {
    setCurrent('')
    navigate('/dashboard')
  }
  return (
    <>
      <Sider className={styles['sidebar']}>
        <div className={styles['sidebar-item']}>
          <div className={styles['sidebar-menu']}>
            <img className={styles['logo']} src={logoInventron} alt="logo inventron" onClick={onHome} />
            <Menu
              className={styles['menu-item']}
              mode="inline"
              defaultSelectedKeys={'/dashboard'}
              selectedKeys={[current]}
              items={MENU_ITEMS}
              onClick={onPath}
            />
          </div>
          <div className={styles['sidebar-logout']}>
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
                Cookies.remove('token')
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
        </div>
      </Sider>
    </>
  )
}

export default SidebarComponent
