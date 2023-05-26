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
      <Row style={{ textAlign: 'center' }}>
        <Space direction="vertical">
          <Title level={3} style={{ fontWeight: 700 }}>
            Hubungi Kami
          </Title>
          <p style={{ fontSize: 18, fontWeight: 500, color: '#5F5A5A' }}>
            Jika terdapat pertanyaan yang ingin ditanyakan, jangan sungkan untuk bertanya kepada Kami. Anda dapat
            menguhubungi Kami dengan beberapa kontak yang dapat Anda hubungi.
          </p>
        </Space>
      </Row>

      <Row justify="center" style={{ marginTop: 64 }}>
        <Space size={192}>
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
