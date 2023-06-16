import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { kelolaTransaksi } from './constant'
import { Image, Pagination } from 'antd'
import { api } from '../../api'
import moment from 'moment'
import useKelolaTransaksiApi from './hooks/useKelolaTransaksi'
const KelolaTransaksi = () => {
  const [page, setPage] = useState(1)
  const start = (page - 1) * 2
  const end = page * 2

  const handlePaginate = (value) => {
    setPage(value)
  }

  const [isLoadingKelolaTransaski, dataTransaction, getTransaction] = useKelolaTransaksiApi()

  useEffect(() => {
    getTransaction()
  }, [])

  return (
    <>
      <div className={styles['body']}>
        <h1> Kelola Transaksi</h1>
        {dataTransaction?.slice(start, end)?.map((item, idx) => (
          <div key={idx} className={styles['container']} id={`id-${idx + 2}`}>
            <div className={styles['containerOne']}>
              <p className={styles['label']}>{item.User?.first_name + ' ' + item.User?.last_name}</p>
              <Image width={270} height={170} className={styles['images']} src={item.ItemCategory?.image_url} />
            </div>

            <table className={styles['containerTwo']}>
              <tr>
                <td className={styles['kategori-item']}>kategori loker</td>
                <td>:</td>
                <td className={styles['with-span']}>
                  &nbsp; {item.Locker.LockerType.name}-{item.Locker.LockerType.ID}
                </td>
              </tr>
              <tr>
                <td className={styles['kategori-item']}>Barang</td>
                <td>:</td>
                <td className={styles['with-span']}>&nbsp; {item.ItemCategory.name}</td>
              </tr>
              <tr>
                <td className={styles['kategori-item']}>Tanggal Check In</td>
                <td>:</td>
                <td className={styles['with-span']}>&nbsp; {moment(item.start_date).format('DD MMMM YYYY')}</td>
              </tr>
              <tr>
                <td className={styles['kategori-item']}>Tanggal Check Out</td>
                <td>:</td>
                <td className={styles['with-span']}>&nbsp; {moment(item.end_date).format('DD MMMM YYYY')}</td>
              </tr>
              <tr>
                <td className={styles['kategori-item']}>Alamat Pickup</td>
                <td>:</td>
                <td className={styles['with-spans3']}>&nbsp; {item.Locker.Warehouse.name}</td>
              </tr>
            </table>

            <div className={styles['containerThree']}>
              <span className={styles['kode']}>{'Kode Penyewaan: ' + item.order_id}</span>
              <p className={styles['pembayaran']}>
                Pembayaran: <br />
                <span className={styles['tunai']}>{'(' + item.payment_method + ')'} </span>
                <br />
                <span className={styles['tunai']}>{'Rp. ' + item.amount + ',-'} </span>
              </p>
              <button className={styles[item.status === 'On Going' ? 'button-sewa' : 'button-selesai']}>
                {item.status === 'On Going' ? 'Sedang Disewa' : 'Penitipan Selesai'}
              </button>
            </div>
          </div>
        ))}
        <div className={styles['pagination']}>
          <Pagination
            defaultCurrent={1}
            total={dataTransaction?.length}
            pageSize={2}
            onChange={handlePaginate}
            showTotal={(total) => `${page} dari ${Math.ceil(total / 2)} halaman`}
            showSizeChanger={false}
          />
        </div>
      </div>
    </>
  )
}

export default KelolaTransaksi
