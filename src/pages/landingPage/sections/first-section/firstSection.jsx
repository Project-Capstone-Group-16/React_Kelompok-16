import React from 'react'
import styles from './styles.module.css'
import { logo } from '../../../../assets/svg'
import { firstList, menu, secondList } from './constants'
const FirstSection = () => {
  return (
    <div className={styles['first-section']}>
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
      <div className={styles['intro']} id="eksplorasi">
        <div className={styles['intro-content']}>
          <h1>Inventron</h1>
          <h4>Aplikasi Penyimpanan Barang yang Aman dan Terpercaya</h4>
          <h3>Simpan dan Titipkan Barang Anda di Sini</h3>
        </div>
        <button>Mulai</button>
      </div>
      <div className={styles['list-container']}>
        <h1>Mengapa Memilih Inventron?</h1>
        <div className={styles['first-cards']}>
          {firstList.map((item, idx) => (
            <div key={idx} className={styles['first-card']}>
              <img src={item.image} alt={item.label} />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles['list-container']}>
        <h1>Lokasi Penyimpanan Tersedia</h1>
        <div className={styles['second-cards']}>
          {secondList.map((item, idx) => (
            <div key={idx} className={styles['second-card']}>
              <img src={item.image} alt={item.label} />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FirstSection
