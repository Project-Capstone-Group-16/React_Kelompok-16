import React, { useState } from 'react'
import styles from './styles.module.css'
import { kelolaTransaksi } from './constant'
import { Pagination } from 'antd'

const KelolaTransaksi = () => {
  const [page, setPage] = useState(1)
  const start = (page - 1) * 2
  const end = page * 2
  const handlePaginate = (value) => {
    setPage(value)
  }
  // const getButtonClassName = (status) => {
  //   if (status === 'Disewa') {
  //     return `${styles['penitipan']} ${styles['penitipan-blue']}`
  //   } else {
  //     return styles['penitipan']
  //   }
  // }
  return (
    <div>
      <div className={styles['body']}>
        <h1> Kelola Transaksi</h1>
        {kelolaTransaksi?.slice(start, end)?.map((item, idx) => (
          <div className={`${styles['body-box']}`}>
            <div className={styles['container']} key={idx} id={`id-${idx + 2}`}>
              <div className={styles['containerOne']}>
                <button className={styles['button']}>{item.label}</button>
                <img className={styles['images']} src={item.image} />
              </div>

              <div className={styles['containerTwo']}>
                <tbody>
                  <tr>
                    <td className={styles['kategori-item']}>kategori loker</td>
                    <td>:</td>
                    <td className={styles['with-span']}>&nbsp; {item.kLoker}</td>
                  </tr>
                  <tr>
                    <td className={styles['kategori-item']}>Barang</td>
                    <td>:</td>
                    <td className={styles['with-span']}>&nbsp; {item.barang}</td>
                  </tr>
                  <tr>
                    <td className={styles['kategori-item']}>Tanggal Check In</td>
                    <td>:</td>
                    <td className={styles['with-span']}>&nbsp; {item.chckin}</td>
                  </tr>
                  <tr>
                    <td className={styles['kategori-item']}>Tanggal Check Out</td>
                    <td>:</td>
                    <td className={styles['with-span']}>&nbsp; {item.chcout}</td>
                  </tr>
                  <tr>
                    <td className={styles['kategori-item']}>Alamat Pickup</td>
                    <td>:</td>
                    <td className={styles['with-spans3']}>&nbsp; {item.location}</td>
                  </tr>
                </tbody>
              </div>

              <div className={styles['containerThree']}>
                <span className={styles['kode']}>{item.kode}</span>
                <p className={styles['pembayaran']}>
                  Pembayaran: <br />
                  <span className={styles['tunai']}>{item.rp} </span>
                </p>
                <button className={styles[item.status === 'Penitipan Selesai' ? 'button-selesai' : 'button-sewa']}>
                  {item.status}
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className={styles['pagination']}>
          <Pagination
            defaultCurrent={1}
            total={kelolaTransaksi?.length}
            pageSize={2}
            onChange={handlePaginate}
            showTotal={(total, range) => `${range[0]}-${range[1]} dari ${Math.ceil(total / 2)} halaman `}
            showSizeChanger={false}
          />
        </div>
      </div>
    </div>
  )
}

export default KelolaTransaksi
