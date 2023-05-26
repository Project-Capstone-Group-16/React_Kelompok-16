import React from 'react'
import { Row, Space, Typography, Button } from 'antd'
import { Link } from 'react-router-dom'

import UnduhanImage1 from '../../../assets/images/unduhan/unduhan1.png'
import UnduhanImage2 from '../../../assets/images/unduhan/unduhan2.png'
import UnduhanImage3 from '../../../assets/images/unduhan/unduhan3.png'
import UnduhanImage4 from '../../../assets/images/unduhan/unduhan4.png'
import GooglePlayImage from '../../../assets/images/unduhan/googleplay.png'
import AppStoreImage from '../../../assets/images/unduhan/appStore.png'

import styles from './styles.module.css'

function Unduhan() {
  const { Title } = Typography

  return (
    <>
      <section>
        <hr className={styles['dividen']} />
        <Row justify="center" className={styles['content-unduhan']}>
          <Title level={3} className={styles['title-unduhan']}>
            Mulai Menyimpan Barang yang Aman dan Murah dengan Inventron!
          </Title>

          <Space size={24}>
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
