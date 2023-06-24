import React from 'react'
import styles from './styles.module.css'
import { Button, Popconfirm } from 'antd'
import { Image } from 'antd'
import { useDeleteWarehouse } from '../../../pages/kelolaWarehouse/hooks/useWarehouses'
import LoadingComponent from '../../loadingComponent'
const Card = ({ data, onEdit, refetch }) => {
  const { name, city, address, description, ID, image_url } = data
  const [isLoadingDelete, deleteData] = useDeleteWarehouse()
  const onDelete = async () => {
    await deleteData(ID, refetch)
  }
  const lokerList = [`Small\nS1 - S15`, `Medium\nM16 - M30`, `Large\nL31- L40`]
  return (
    <>
      <div className={styles['warehouse-container']}>
        <Image className={styles['image-warehouse']} src={image_url} alt="image warehouse" width={148} height={205} />

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
      {isLoadingDelete ? <LoadingComponent /> : null}
    </>
  )
}

export default Card
