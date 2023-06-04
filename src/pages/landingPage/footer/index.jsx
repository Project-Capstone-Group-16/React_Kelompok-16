import { Row, Col, Space, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import Gap from '../../../components/gap'

import {
  AppStoreImage,
  GooglePlayImage,
  LogoBrandImage,
  UnduhanImage1,
  UnduhanImage2,
  UnduhanImage3,
  UnduhanImage4,
} from '../../../assets/images/footer'

import { FacebookIcon, InstagramIcon, WhatsappIcon, TwitterIcon } from '../../../assets/svg/footer'

import styles from './styles.module.css'

function Footer() {
  const { Title } = Typography

  return (
    <>
      <footer>
        <Row justify="center" className={styles['footer-content']}>
          <Title level={3} className={styles['heading-3']}>
            Mulai Menyimpan Barang yang Aman dan Murah dengan Inventron!
          </Title>

          <Space size={24}>
            <img src={UnduhanImage1} alt="" />
            <img src={UnduhanImage2} alt="" />
            <img src={UnduhanImage3} alt="" />
            <img src={UnduhanImage4} alt="" />
          </Space>
        </Row>

        <Row justify="center" align="middle" className={styles['footer-bottom']} id="unduh">
          <Col span={8}>
            <img src={LogoBrandImage} />
            <Title level={4} className={styles['heading']}>
              Inventron
            </Title>
            <Gap height={18} />
            <p className="subtitle-brand">
              Inventron hadir untuk mempermudah pengguna menitipkan barangnya dengan aman dan nyaman di loker kami
            </p>
            <Gap height={24} />
            <p className={styles['copyright-text']}>&copy; 2023 Inventron</p>
          </Col>

          <Col span={8}>
            <Title level={4} className={styles['heading']}>
              Hubungi Kami
            </Title>
            <Gap height={46} />
            <Space size={28}>
              <Link>
                <img src={FacebookIcon} />
              </Link>
              <Link>
                <img src={InstagramIcon} />
              </Link>
              <Link>
                <img src={WhatsappIcon} />
              </Link>
              <Link>
                <img src={TwitterIcon} />
              </Link>
            </Space>
          </Col>

          <Col span={8}>
            <Title level={4} className={styles['heading']}>
              Download Aplikasi Inventron Disini
            </Title>
            <Gap height={36} />
            <Space size={32} block={true}>
              <Link>
                <img
                  src={GooglePlayImage}
                  className={styles['img-unduh']}
                  alt="unduh aplikasi inventron di google play"
                />
              </Link>
              <Link>
                <img src={AppStoreImage} className={styles['img-unduh']} alt="unduh aplikasi inventron di Appstore" />
              </Link>
            </Space>
          </Col>
        </Row>
      </footer>
    </>
  )
}

export default Footer
