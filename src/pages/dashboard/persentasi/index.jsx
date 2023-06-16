import { Col, Progress, Row } from 'antd'
import React from 'react'
import { FORMAT_DATE, RUPIAH } from '../../../helpers'
import styles from './styles.module.css'

const Persentasi = ({ data }) => {
  const persentasi = (data?.total_used_lockers / data?.total_lockers) * 100

  return (
    <>
      <Row className={styles['container-persentasi']}>
        <Col span={12}>
          <Row className={styles['container-persentasi-1']}>
            <Col className={styles['container-date']} span={24}>
              <p className={styles['title-date']}>Hari Ini</p>
              <p className={styles['date']}>{FORMAT_DATE(data?.todey)}</p>
            </Col>
            <Col span={24} className={styles['container-persentasi-terpakai']}>
              <span className={styles['container-persentasi-terpakai-1']}>
                <p className={styles['title-persentasi']}>Total Penyimpanan</p>
                <p className={styles['number-persentasi']}>{data ? data?.total_lockers : 0}</p>
              </span>
              <span className={styles['container-persentasi-terpakai-2']}>
                <p className={styles['title-persentasi']}>Terpakai</p>
                <p className={styles['number-persentasi']}>{data ? data?.total_used_lockers : 0}</p>
              </span>
            </Col>
            <Col span={24} className={styles['container-persentasi-terpakai']}>
              <Progress
                className={styles['progress']}
                percent={persentasi}
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
                <p className={styles['number-total-pengguna']}>{data ? data?.total_users : 0}</p>
              </span>
              <span className={styles['container-total-pengguna-2']}>
                <p className={styles['title-total-pengguna']}>Total Pendapatan</p>
                <p className={styles['number-total-pengguna']}>{RUPIAH(data ? data?.total_income : 0)}</p>
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Persentasi
