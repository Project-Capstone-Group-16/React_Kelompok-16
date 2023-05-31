import React from 'react'
import { logo } from '../../assets/svg'
import { menu } from './constants'
import FirstSection from './ekplorasi/first-section'
import Penitipan from './ekplorasi/penitipan'
import Unggulan from './ekplorasi/unggulan'
import Footer from './footer'
import styles from './styles.module.css'
import TentangKami from './tentangKami'

const LandingPage = () => {
  return (
    <>
      <div className={styles['nav-bar']}>
        <div className={styles['nav-bar-content']}>
          <div className={styles['logo-container']}>
            <img src={logo} />
            <span>Inventron</span>
          </div>
          <div className={styles['menu']}>
            {menu.map((item) => (
              <a key={item.link} href={item.link}>
                {item.label}
              </a>
            ))}
          </div>
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
