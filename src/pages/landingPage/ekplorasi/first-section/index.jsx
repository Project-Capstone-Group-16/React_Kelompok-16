import React from 'react'
import { firstList, secondList } from './constants'
import styles from './styles.module.css'
const FirstSection = () => {
  return (
    <div className={styles['first-section']} id="eksplorasi">
      <div className={styles['intro']}>
        <div className={styles['intro-content']}>
          <h1>Inventron</h1>
          <h4>Aplikasi Penyimpanan Barang yang Aman dan Terpercaya</h4>
          <h3>Simpan dan Titipkan Barang Anda di Sini</h3>
        </div>
        <a href="#mengapa">
          <button>Mulai</button>
        </a>
      </div>
      <div className={styles['list-container']}>
        <h1 className={styles['mengapa']} id="mengapa">
          Mengapa Memilih Inventron?
        </h1>
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
