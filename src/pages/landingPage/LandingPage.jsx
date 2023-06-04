import React, { useState } from 'react'
import { BurgerSVG, logo } from '../../assets/svg'
import { menu } from './constants'
import FirstSection from './ekplorasi/first-section'
import Penitipan from './ekplorasi/penitipan'
import Unggulan from './ekplorasi/unggulan'
import Footer from './footer'
import styles from './styles.module.css'
import TentangKami from './tentangKami'

const LandingPage = () => {
  const [drawer, setDrawer] = React.useState(false)
  return (
    <>
      <div className={styles[drawer ? 'nav-bar-active' : 'nav-bar']}>
        <div className={styles['nav-bar-content']}>
          <h1 className={styles[drawer ? 'logo-active' : 'logo']}>Inventron</h1>
          <div className={styles[drawer ? 'logo-container' : 'logo-container-active']}>
            <img src={logo} />
            <span>Inventron</span>
          </div>
          <button
            className={styles['burger-menu']}
            onClick={() => {
              setDrawer(!drawer)
            }}
          >
            <BurgerSVG color={drawer ? '#FFF' : '#1652F9'} />
          </button>
          <div className={styles['menu']}>
            {menu.map((item) => (
              <a key={item.link} href={item.link}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className={styles[drawer ? 'dropdown-active' : 'dropdown']}>
          {menu.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={() => {
                setDrawer(false)
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <FirstSection />
      <Unggulan />
      <Penitipan />
      <TentangKami />
      {/* <HubungiKami /> */}
      <Footer />
    </>
  )
}

export default LandingPage
