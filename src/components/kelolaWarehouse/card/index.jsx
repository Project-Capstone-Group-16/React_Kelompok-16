import React from 'react'
import styles from './styles.module.css'
import { logoLoker } from '../../../assets/images/admin'
import { Popconfirm } from 'antd'
const Card = ({ data, onEdit }) => {
  const { name, city, address, lokerList, description } = data
  const onDelete = () => {
    console.log('delete')
  }
  return (
    <div className={styles['warehouse-container']}>
      <img className={styles['image-warehouse']} src={logoLoker} alt="image warehouse" />

      <div className={styles['warehouse-card']}>
        <div className={styles['card-title']}>Alamat</div>
        <h4 className={styles['city']}>{city}</h4>
        <p className={styles['address']}>{address}</p>
      </div>

      <div className={styles['warehouse-card']}>
        <div className={styles['card-title']}>Jumlah Loker</div>
        <ul className={styles['loker-list']}>
          {lokerList.map((item, idx) => (
            <li className={styles['loker-size']} key={idx}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles['description-card']}>
        <div className={styles['card-title']}>Deskripsi</div>
        <p className={styles['description']}>{description}</p>
      </div>

      <div className={styles['actions-card']}>
        <button className={styles['edit-button']} onClick={onEdit}>
          Ubah
        </button>
        <Popconfirm
          placement="bottomRight"
          title="Apakah Yakin Mau Menghapus Inventron Ini ?"
          description={`Hapus ${name}`}
          onConfirm={onDelete}
          okText="Yes"
          cancelText="No"
        >
          <button className={styles['delete-button']}>Hapus</button>
        </Popconfirm>
      </div>
    </div>
  )
}

export default Card
