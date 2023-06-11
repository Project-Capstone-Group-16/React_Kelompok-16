import { Col, Progress, Row, Space } from 'antd'
import dayjs from 'dayjs'
import React from 'react'
import styles from './styles.module.css'

const Persentasi = () => {
  const date = new Date()
  const dateNow = dayjs(date).format('dddd, DD MMMM YYYY')

  return (
    <>
      <Row className={styles['container-persentasi']}>
        <Col span={12}>
          <Row className={styles['container-persentasi-1']}>
            <Col className={styles['container-date']} span={24}>
              <p className={styles['title-date']}>Hari Ini</p>
              <p className={styles['date']}>{dateNow}</p>
            </Col>
            <Col span={24} className={styles['container-persentasi-terpakai']}>
              <span className={styles['container-persentasi-terpakai-1']}>
                <p className={styles['title-persentasi']}>Total Penyimpanan</p>
                <p className={styles['number-persentasi']}>200</p>
              </span>
              <span className={styles['container-persentasi-terpakai-2']}>
                <p className={styles['title-persentasi']}>Terpakai</p>
                <p className={styles['number-persentasi']}>7</p>
              </span>
            </Col>
            <Col span={24} className={styles['container-persentasi-terpakai']}>
              <Progress
                className={styles['progress']}
                percent={30}
                showInfo={false}
                strokeColor={'white'}
                size={[345, 12]}
                trailColor={'gray'}
              />
            </Col>
          </Row>
        </Col>
        <Col span={10}>
          <Row className={styles['container-total-pengguna']}>
            <Col span={24} className={styles['total-pengguna']}>
              <span className={styles['container-total-pengguna-1']}>
                <p className={styles['title-total-pengguna']}>Total Pengguna</p>
                <p className={styles['number-total-pengguna']}>2</p>
              </span>
              <span className={styles['container-total-pengguna-2']}>
                <p className={styles['title-total-pengguna']}>Total Pendapatan</p>
                <p className={styles['number-total-pengguna']}>Rp 45.000</p>
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Persentasi
