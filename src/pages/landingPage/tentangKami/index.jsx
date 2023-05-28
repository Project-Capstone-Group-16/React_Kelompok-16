import { Card, Col, Row, Typography } from 'antd'
import React from 'react'
import { inventron } from './constant'
import styles from './styles.module.css'

const TentangKami = () => {
  return (
    <div className={styles['body-container']} id="tentangKami">
      <h1 className={styles['tentang']}>Tentang Kami</h1>
      <p className={styles['p-inventron']}>
        PT. Inventron atau Inventory Now merupakan suatu perusahaan yang bergerak di bidang <br /> penyimpanan barang
        yang berkaitan dengan pengelolaan barang maupun penitipan barang.
      </p>
      <div className={styles['inventron']}>Ayo mulai menyimpan di Inventron</div>
      <p className={styles['p-variasi']}>Variasi penyimpanan yang beragam dan menarik untuk dipilih</p>
      <Row gutter={[24, 24]} align="middle">
        {inventron.map((item, idx) => (
          <Col xs={12} md={8} lg={6} key={idx}>
            <Card className={styles['first-card']} bodyStyle={{ padding: 0 }}>
              <div className={styles['cover-image']}>
                <img alt="example" src={item.image} />
              </div>
              <div className={styles['container-label']}>
                <Typography.Title ellipsis={{ rows: 1 }} className={styles['label']}>
                  {item.label}
                </Typography.Title>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default TentangKami
