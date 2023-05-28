import { Card, Col, Row, Typography } from 'antd'
import React from 'react'
import { UNGGULAN_1 } from './constant'
import styles from './styles.module.css'

const Unggulan = () => {
  return (
    <section className={styles['container__unggulan']}>
      <Typography.Title level={3} style={{ textAlign: 'center', marginBottom: 45 }}>
        Fitur Unggulan Inventron
      </Typography.Title>
      <Row gutter={[24, 24]} align="middle">
        {UNGGULAN_1.map((ug) => (
          <Col xs={12} sm={8} lg={6} key={ug.id}>
            <Card className={styles['unggulan__card']} bordered={false} bodyStyle={{ padding: 0 }}>
              <Row style={{ flexFlow: 'column' }} justify="center" align="middle">
                <div className={styles['unggulan__image']}>
                  <img src={ug.image_src} alt="unggulan image" />
                </div>
                <Typography.Text className={styles['unggulan__title']}>{ug.title}</Typography.Text>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default Unggulan
