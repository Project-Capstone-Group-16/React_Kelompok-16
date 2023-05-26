import React from 'react'
import styles from './style.module.css'
import { inventron } from './constant'

const TentangKami = () => {
  return (
    <div className={styles['body']}>
      <div className={styles['body-container']}>
        <h1 className={styles['tentang']}>Tentang Kami</h1>
        <p className={styles['p-inventron']}>
          PT. Inventron atau Inventory Now merupakan suatu perusahaan yang bergerak di bidang <br /> penyimpanan barang
          yang berkaitan dengan pengelolaan barang maupun penitipan barang.
        </p>
        <div className={styles['inventron']}>Ayo mulai menyimpan di Inventron</div>
        <p className={styles['p-variasi']}>Variasi penyimpanan yang beragam dan menarik untuk dipilih</p>
        <div className={styles['list-container']}>
          <div className={styles['first-cards']}>
            {inventron.map((item, idx) => (
              <div key={idx} className={styles['first-card']}>
                <img className={styles['image']} src={item.image} alt={item.label} />
                <p className={styles['p-label']}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TentangKami
