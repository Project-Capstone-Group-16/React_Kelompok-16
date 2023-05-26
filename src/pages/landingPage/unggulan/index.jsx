import React from 'react'

import { Card, Col, Row, Typography } from 'antd'

import { UNGGULAN_1, UNGGULAN_2 } from './constant'

import styles from './styles.module.css'

const Unggulan = () => {
  return (
    <section className={styles['container__unggulan']}>
      <Typography.Title level={3} style={{ textAlign: 'center', marginBottom: 24 }}>
        Fitur Unggulan Inventron
      </Typography.Title>
      <Row gutter={[24, 24]} align="middle" justify={{ xs: 'start', lg: 'center' }}>
        {UNGGULAN_1.map((ug) => (
          <Col xs={12} sm={8} lg={4} key={ug.id}>
            <Card bordered={false} bodyStyle={{ padding: 0 }}>
              <Row style={{ flexFlow: 'column' }} justify="center" align="middle">
                <div className={styles['unggulan__image']}>
                  <img src={ug.image_src} alt="unggulan image" />
                </div>
                <Typography.Paragraph strong className={styles['unggulan__title']}>
                  {ug.title}
                </Typography.Paragraph>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ marginBottom: 50 }} />
      <Row gutter={[24, 24]} align="middle" justify={{ xs: 'start', lg: 'center' }}>
        {UNGGULAN_2.map((ug) => (
          <Col xs={12} sm={8} lg={6} key={ug.id}>
            <Card bordered={false} bodyStyle={{ padding: 0 }} style={{ position: 'relative' }}>
              <div className={styles['unggulan__image-2']}>
                <img src={ug.image_src} alt="unggulan image" />
              </div>
              <Typography.Text
                strong
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  color: '#ffffff',
                  fontSize: 18,
                  width: '100%',
                  maxWidth: 210,
                }}
              >
                {ug.title}
              </Typography.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default Unggulan
