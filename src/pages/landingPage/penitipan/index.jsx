import React from 'react'

import { Card, Col, Row, Typography } from 'antd'

import { PENITIPAN } from './constant'

import styles from './styles.module.css'

const Penitipan = () => {
  return (
    <section className={styles['container__penitipan']}>
      <Typography.Title level={3} style={{ textAlign: 'center', marginBottom: 24 }}>
        Rekomendasi Penitipan
      </Typography.Title>
      <Row gutter={[24, 24]} align="middle" justify={{ xs: 'start', lg: 'center' }}>
        {PENITIPAN.map((pen) => (
          <Col xs={12} sm={8} lg={6} key={pen.id}>
            <Card
              cover={<img alt="example" src={pen.image_src} className={styles['penitipan__cover__image']} />}
              className={styles['penitipan__card']}
            >
              <Card.Meta title={pen.title} description={pen.users} />
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default Penitipan
