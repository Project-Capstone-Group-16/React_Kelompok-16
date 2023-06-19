import { Col, Pagination, Row, Tooltip } from 'antd'
import React, { useState } from 'react'
import styles from './styles.module.css'

const Loker = ({ data }) => {
  const [page, setPage] = useState(1)
  const start = page - 1
  const end = page
  const handlePaginate = (value) => {
    setPage(value)
  }
  const typeLoker = (lokerCity) => {
    let temp = [
      {
        id: 1,
        type: 'Small',
        Loker: [],
      },
      {
        id: 2,
        type: 'Medium',
        Loker: [],
      },
      {
        id: 3,
        type: 'Large',
        Loker: [],
      },
    ]
    lokerCity?.Locker?.map((item) => {
      if (item?.LockerType?.name === 'Small') {
        temp[0].Loker.push({
          id: item?.ID,
          name: item?.name,
          available: item?.availability,
        })
      } else if (item?.LockerType?.name === 'Medium') {
        temp[1].Loker.push({
          id: item?.ID,
          name: item?.name,
          available: item?.availability,
        })
      } else {
        temp[2].Loker.push({
          id: item?.ID,
          name: item?.name,
          available: item?.availability,
        })
      }
    })
    return temp
  }
  return (
    <>
      {data ? (
        <div className="container-loker">
          {data?.slice(start, end)?.map((item) => (
            <div key={item.ID} className={styles['list-item']}>
              <span className={styles['container-title-loker']}>
                <p className={styles['title-loker']}>{item.name}</p>
                <p className={styles['title-loker']}>Kontrol Loker</p>
              </span>
              {typeLoker(data?.[page - 1])?.map((type) => (
                <Row key={type.id} span={24} className={styles['container-type-loker']}>
                  <Col className={styles['type-loker']} span={24}>
                    {type.type}
                  </Col>
                  {type.Loker.map((loker) => (
                    <Tooltip key={loker.id} title={loker.available === 'Available' ? 'Tersedia' : 'Tidak Tersedia'}>
                      <Col
                        span={5}
                        className={styles['type-loker-number']}
                        style={{
                          backgroundColor: loker.available === 'Available' ? '#D9D9D9' : ' #FCB3B3',
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
            {data ? (
              <Pagination defaultCurrent={1} value={page} total={data?.length} pageSize={1} onChange={handlePaginate} />
            ) : null}
          </div>
        </div>
      ) : (
        'Loker tidak tersedia'
      )}
    </>
  )
}

export default Loker
