import { Col, Pagination, Row, Tooltip } from 'antd'
import React, { useState } from 'react'
import { LOKER } from './constants'
import styles from './styles.module.css'

const Loker = () => {
  const [page, setPage] = useState(1)
  const start = page - 1
  const end = page
  const handlePaginate = (value) => {
    setPage(value)
  }
  return (
    <>
      <div className="container-loker">
        {LOKER?.slice(start, end)?.map((item) => (
          <div key={item.id} className={styles['list-item']}>
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
          </div>
        ))}
        <div className={styles['container-pagination']}>
          <Pagination defaultCurrent={1} total={LOKER?.length} pageSize={1} onChange={handlePaginate} />
        </div>
      </div>
    </>
  )
}

export default Loker
