import React from 'react'

import { Card, Col, Row, Typography } from 'antd'

import { PENITIPAN } from './constant'

import styles from './styles.module.css'

const Penitipan = () => {
  return (
    <section className={styles['container__penitipan']}>
      <Typography.Title level={3} style={{ textAlign: 'center', marginBottom: 45 }}>
        Rekomendasi Penitipan
      </Typography.Title>
      <Row gutter={[24, 24]} align="middle">
        {PENITIPAN.map((pen) => (
          <Col xs={12} md={8} lg={6} key={pen.id}>
            <Card className={styles['penitipan__card']} bodyStyle={{ padding: 0 }}>
              <div className={styles['penitipan__cover__image']}>
                <img alt="example" src={pen.image_src} />
              </div>

              <div className={styles['penitipan__card__space']}>
                <Typography.Title ellipsis={{ rows: 1 }} className={styles['space__title']}>
                  {pen.title}
                </Typography.Title>
                <Typography.Text className={styles['space__subtitle']}>{pen.users}</Typography.Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default Penitipan
