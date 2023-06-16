import React, { useEffect, useState } from 'react'

import { Button, Card, Image, Pagination, Row, Space, Tag, Typography } from 'antd'

import styles from './styles.module.css'
import { useKelolaBarang } from './hooks/useKelolaBarang'
import dayjs from 'dayjs'

const KelolaBarang = () => {
  const [page, setPage] = useState(1)

  const { data, getTransactions } = useKelolaBarang()

  const start = (page - 1) * 2
  const end = page * 2

  const handlePaginate = (value) => setPage(value)

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <section className={styles['kelola__barang']}>
      <Typography.Title level={1} className={styles['outer__title']} id="outer__title">
        Kelola Barang
      </Typography.Title>

      {data.slice(start, end).map((dt, idx) => (
        <Card className={styles['card__outer']} bodyStyle={{ padding: '22px 14px' }} id="card__outer">
          <Tag className={styles['tag__barang']} id="tag__barang">
            Barang {idx + 1}
          </Tag>

          <Row>
            <Card className={styles['card__inner__left']} style={{ marginRight: 24 }} id="card__inner__left">
              <Row style={{ gap: 10 }} align="middle" justify="center">
                <Image
                  width={112}
                  height={148}
                  style={{ borderRadius: 8 }}
                  src={dt.ItemCategory.image_url}
                  preview={false}
                  id="image__barang"
                />
                <Card
                  className={styles['card__name']}
                  bodyStyle={{ height: '100%', width: '100%', padding: '32px 16px' }}
                  id="card__name"
                >
                  <Typography.Text className={styles['weight__barang__title']} id="text__title">
                    Nama Barang&nbsp;:
                  </Typography.Text>
                  <Typography.Paragraph
                    ellipsis={{ rows: 2 }}
                    className={styles['text__barang__name']}
                    id="text__barang__name"
                  >
                    {dt.ItemCategory.name}
                  </Typography.Paragraph>
                </Card>
              </Row>
            </Card>
            <Card className={styles['card__inner__right']} id="card__inner__right">
              <Row style={{ gap: 10 }} align="middle" justify="center">
                <Image
                  width={143}
                  height={203}
                  style={{ borderRadius: 8 }}
                  src={dt.Locker?.Warehouse?.image_url}
                  preview={false}
                  id="image__barang"
                />
                <Card
                  className={styles['card__detail']}
                  bodyStyle={{ height: '100%', width: '100%', padding: '10px 16px', overflowY: 'scroll' }}
                  id="card__detail"
                >
                  <Typography.Title level={5} className={styles['detail__title']} id="detail__title">
                    Warehouse
                  </Typography.Title>
                  <Typography.Paragraph ellipsis className={styles['detail__value']} id="detail__value">
                    {dt.Locker?.Warehouse?.name}
                  </Typography.Paragraph>
                  <Typography.Title level={5} className={styles['detail__title']} id="detail__title">
                    Kategori
                  </Typography.Title>
                  <Typography.Paragraph ellipsis className={styles['detail__value']} id="detail__value">
                    M-17
                  </Typography.Paragraph>
                  <Typography.Title level={5} className={styles['detail__title']} id="detail__title">
                    Waktu Check In
                  </Typography.Title>
                  <Typography.Paragraph className={styles['detail__value']} id="detail__value">
                    {dayjs(dt.start_date).format('dddd, DD MMMM YYYY')}
                  </Typography.Paragraph>
                  <Typography.Title level={5} className={styles['detail__title']} id="detail__title">
                    Waktu Check Out
                  </Typography.Title>
                  <Typography.Paragraph className={styles['detail__value']} id="detail__value">
                    {dayjs(dt.end_date).format('dddd, DD MMMM YYYY')}
                  </Typography.Paragraph>
                </Card>
              </Row>
            </Card>
          </Row>
        </Card>
      ))}

      <Row justify="center" style={{ marginTop: 20 }} align="middle">
        <Pagination
          total={data?.length}
          current={page}
          pageSize={2}
          onChange={handlePaginate}
          showTotal={(total) => `${page} dari ${Math.ceil(total / data?.length)} halaman`}
        />
      </Row>
    </section>
  )
}

export default KelolaBarang
