import React from 'react'
import styles from './styles.module.css'
import { LOKER } from './constants'
import { Col, List, Row, Tooltip } from 'antd'

const Loker = () => {
  return (
    <>
      <List
        className={styles['container-loker']}
        pagination={{
          pageSize: 1,
        }}
        dataSource={LOKER}
        renderItem={(item) => (
          <List.Item key={item.id} className={styles['list-item']}>
            <span className={styles['container-title-loker']}>
              <p className={styles['title-loker']}>Inventron {item.name}</p>
              <p className={styles['title-loker']}>Kontrol Loker</p>
            </span>
            {item.type_loker.map((type) => (
              <Row key={type.id} span={24} className={styles['container-type-loker']}>
                <Col className={styles['type-loker']} span={24}>
                  {type.type}
                </Col>
                {type.loker.map((loker) => (
                  <Tooltip key={loker.id} title={loker.available ? 'Tersedia' : 'Tidak Tersedia'}>
                    <Col
                      span={5}
                      className={styles['type-loker-number']}
                      style={{
                        backgroundColor: loker.available ? '#D9D9D9' : ' #FCB3B3',
                      }}
                    >
                      <p>{loker.name}</p>
                    </Col>
                  </Tooltip>
                ))}
              </Row>
            ))}
          </List.Item>
        )}
      />
    </>
  )
}

export default Loker
