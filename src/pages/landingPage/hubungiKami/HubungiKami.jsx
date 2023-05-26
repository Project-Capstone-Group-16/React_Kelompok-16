import React from 'react'
import { Row, Col, Space, Typography } from 'antd'

import InstagramIcon from '../../../assets/icons/media-sosial/IG.svg'
import WhatsappIcon from '../../../assets/icons/media-sosial/Wa.svg'
import FacebookIcon from '../../../assets/icons/media-sosial/FB.svg'
import LineIcon from '../../../assets/icons/media-sosial/Line.svg'

import styles from './styles.module.css'

function HubungiKami() {
  const { Title } = Typography

  return (
    <>
      <Row justify="center" style={{ textAlign: 'center' }}>
        <Space direction="vertical">
          <Title level={3} className={styles['heading-3']}>
            Hubungi Kami
          </Title>
          <p className={styles['text-hubungi-kami']}>
            Jika terdapat pertanyaan yang ingin ditanyakan, jangan sungkan untuk bertanya kepada Kami. Anda dapat
            menguhubungi Kami dengan beberapa kontak yang dapat Anda hubungi.
          </p>
        </Space>
      </Row>

      <Row justify="center">
        <Space size={192} className={styles['sosial-media-icon']}>
          <img src={InstagramIcon} alt="ikon media sosial" />
          <img src={WhatsappIcon} alt="ikon media sosial" />
          <img src={FacebookIcon} alt="ikon media sosial" />
          <img src={LineIcon} alt="ikon media sosial" />
        </Space>
      </Row>
    </>
  )
}

export default HubungiKami
