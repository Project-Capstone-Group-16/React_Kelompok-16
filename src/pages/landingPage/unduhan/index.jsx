import { Row, Space, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import {
  AppStoreImage,
  GooglePlayImage,
  UnduhanImage1,
  UnduhanImage2,
  UnduhanImage3,
  UnduhanImage4,
} from '../../../assets/images/unduhan'

import styles from './styles.module.css'

function Unduhan() {
  const { Title } = Typography

  return (
    <>
      <section id="unduh">
        <hr className={styles['dividen']} />
        <Row justify="center" className={styles['content-unduhan']}>
          <Title level={3} className={styles['title-unduhan']}>
            Mulai Menyimpan Barang yang Aman dan Murah dengan Inventron!
          </Title>

          <Space size={24} className={styles['list-unduhan']}>
            <img src={UnduhanImage1} alt="" />
            <img src={UnduhanImage2} alt="" />
            <img src={UnduhanImage3} alt="" />
            <img src={UnduhanImage4} alt="" />
          </Space>
        </Row>
        <hr className={styles['dividen']} />

        <Row justify="center" className={styles['link-app-download']}>
          <Space size={41}>
            <Link>
              <img src={GooglePlayImage} alt="" />
            </Link>
            <Link>
              <img src={AppStoreImage} alt="" />
            </Link>
          </Space>
        </Row>
      </section>
    </>
  )
}

export default Unduhan
